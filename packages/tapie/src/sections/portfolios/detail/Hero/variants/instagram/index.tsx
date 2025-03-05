import { content, member } from './styles.css';

import {
  AspectRatio,
  HStack,
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
import Carousel from './carousel';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function InstagramHero(_props: Props) {
  return (
    <VStack fullWidth>
      <Member />
      <Carousel />
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

function Member() {
  return (
    <HStack
      fullWidth
      className={member}
      spacing={spacingVars.petite}
      justify={StackJustify.START}
    >
      <AspectRatio
        ratio={1}
        width={28}
      >
        <Skeleton
          fullWidth
          fullHeight
          borderRadius={radiusVars.full}
        />
      </AspectRatio>
      <Typo.Petite>jeewon__k 외 3명</Typo.Petite>
    </HStack>
  );
}
