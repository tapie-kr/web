import { container, content } from './page.css';

import {
  AspectRatio,
  radiusVars,
  Skeleton,
  spacingVars,
  Stack,
  StackAlign,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';

import Hero from '@/sections/members/detail/Hero';
import History from '@/sections/members/detail/History';
import Projects from '@/sections/members/detail/Projects';
import RepresentativeAward from '@/sections/members/detail/RepresentativeAward';
import RepresentativePortfolio from '@/sections/members/detail/RepresentativePortfolio';
import Skills from '@/sections/members/detail/Skills';

export default function MembersDetailPage() {
  return (
    <Stack
      fullWidth
      className={container}
      spacing={spacingVars.medium}
      justify={StackJustify.CENTER}
      align={StackAlign.START}
    >
      <AspectRatio
        ratio={1}
        width={130}
      >
        <Skeleton
          fullWidth
          fullHeight
          borderRadius={radiusVars.full}
        />
      </AspectRatio>
      <VStack
        fullWidth
        className={content}
      >
        <Hero />
        <RepresentativePortfolio />
        <RepresentativeAward />
        <Skills />
        <Projects />
        <History />
      </VStack>
    </Stack>
  );
}
