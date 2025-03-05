'use client';

import * as s from './styles.css';

import {
  AspectRatio,
  HStack,
  Image,
  spacingVars,
  StackJustify,
  Tag,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import Scroll from '@tapie-kr/web-shared/components/Scroll';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '@/utils/api';
import MemberSkeleton from './skeleton';

interface Member {
  uuid:       string;
  name:       string;
  studentID:  number;
  username:   string;
  role:       string;
  unit:       string;
  generation: number;
  profileUri: string;
}

export default function PortfoliosMembersSectionList() {
  const [data, setData] = useState<Member[]>();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    client.get('/members/').then(res => {
      setData(res.data.data as Member[]);
    })
      .finally(() => {
        setIsPending(false);
      });
  }, []);

  if (isPending) {
    return <MemberSkeleton />;
  }

  return (
    <Scroll direction='row'>
      <HStack
        fullWidth
        spacing={spacingVars.moderate}
        justify={StackJustify.START}
      >
        {data?.map(member => (
          <Member
            key={member.uuid}
            profileUri={member.profileUri}
            name={member.name}
            username={member.username}
          />
        ))}
      </HStack>
    </Scroll>
  );
}

type MemberProps = {
  profileUri: string;
  name:       string;
  username?:  string;
};

function Member(_props: MemberProps) {
  const {
    profileUri,
    name,
    username,
  } = _props;

  return (
    <Link href={`/members/${username}`}>
      <VStack spacing={spacingVars.micro}>
        <AspectRatio
          ratio={1}
          width={80}
          className={s.profileImage}
        >
          <Image
            fullHeight
            fullWidth
            src={profileUri}
            alt={`${name}의 프로필 이미지`}
            className={s.profileImage}
          />
        </AspectRatio>
        <Typo.Base
          tag={Tag.SPAN}
          weight={Weight.MEDIUM}
        >
          {name}
        </Typo.Base>
      </VStack>
    </Link>
  );
}
