import { content, member, profileImage } from './styles.css';

import {
  AspectRatio,
  Box,
  HStack,
  Image,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
} from '@tapie-kr/inspire-react';

import { type PortfolioDetail } from '@/app/portfolios/[id]/page';
import HeroActions from '@/sections/portfolios/detail/Hero/components/actions';
import HeroDescription from '@/sections/portfolios/detail/Hero/components/description';
import HeroTitle from '@/sections/portfolios/detail/Hero/components/title';
import { formatParticipants } from '@/utils/participants';
import Carousel from './carousel';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function InstagramHero(_props: Props) {
  return (
    <VStack fullWidth>
      <Member
        pending={_props.pending}
        memberNames={_props.users?.map(user => user.name).filter((name): name is string => Boolean(name)) || []}
        profileUri={_props.users?.[0]?.profileUri}
      />
      <Carousel images={[_props.thumbnailUri ?? '']} />
      <VStack
        fullWidth
        className={content}
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <HeroTitle {..._props} />
        <HeroActions {..._props} />
        <HeroDescription {..._props} />
      </VStack>
    </VStack>
  );
}

interface MemberProps {
  memberNames: string[];
  profileUri?: string;
  pending:     boolean;
}

function Member(_props: MemberProps) {
  return (
    <HStack
      fullWidth
      className={member}
      spacing={spacingVars.petite}
      justify={StackJustify.START}
    >
      <Box
        className={profileImage}
      >
        <AspectRatio
          ratio={1}
          width={28}
        >
          {_props.pending
            ? (
              <Skeleton
                fullWidth
                fullHeight
                borderRadius={radiusVars.full}
              />
            )
            : (
              <Image
                fullHeight
                fullWidth
                src={_props.profileUri ?? ''}
                alt={_props.memberNames.join(', ') ?? ''}
                className={profileImage}
              />
            )}
        </AspectRatio>
      </Box>
      <Typo.Petite>{formatParticipants(_props.memberNames)}</Typo.Petite>
    </HStack>
  );
}
