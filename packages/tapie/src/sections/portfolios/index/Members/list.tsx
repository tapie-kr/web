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

import { useMemberList } from '@tapie-kr/api-client';
import Scroll from '@tapie-kr/web-shared/components/Scroll';
import { useEffect } from 'react';
import MemberSkeleton from './skeleton';

export default function PortfoliosMembersSectionList() {
  const {
    data: members,
    fetch: getMembers,
    isPending,
  } = useMemberList();

  useEffect(() => {
    getMembers();
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
        {members?.data.map(member => (
          <Member
            key={member.uuid}
            profileUri={member.profileUri}
            name={member.name}
          />
        ))}
      </HStack>
    </Scroll>
  );
}

type MemberProps = {
  profileUri: string;
  name:       string;
};

function Member(_props: MemberProps) {
  const { profileUri, name } = _props;

  return (
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
  );
}
