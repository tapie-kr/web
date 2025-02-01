'use client';

import AwardCard from '@/components/award/Card';

import { HStack, spacingVars, StackJustify } from '@tapie-kr/inspire-react';

import Scroll from '@tapie-kr/web-shared/components/Scroll';

export default function PortfoliosRecentAwardsSectionList() {
  return (
    <Scroll direction='row'>
      <HStack
        fullWidth
        spacing={spacingVars.giant}
        justify={StackJustify.START}
      >
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
      </HStack>
    </Scroll>
  );
}
