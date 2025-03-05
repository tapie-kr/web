'use client';

import { HStack, spacingVars, StackJustify } from '@tapie-kr/inspire-react';
import AwardCardSkeleton from '@/components/award/Card/skeleton';

import { useAwardList } from '@tapie-kr/api-client';
import Scroll from '@tapie-kr/web-shared/components/Scroll';
import { useEffect } from 'react';

export default function PortfoliosRecentAwardsSectionList() {
  const {
    data: awards,
    fetch: fetchAwards,
    isPending,
  } = useAwardList();

  useEffect(() => {
    const year = (new Date).getFullYear()
      .toString();

    fetchAwards({ param: { year } });
  }, []);

  return (
    <Scroll direction='row'>
      {awards?.data.toString()}
      <HStack
        fullWidth
        spacing={spacingVars.giant}
        justify={StackJustify.START}
      >
        {Array(10).fill(0)
          .map((_, index) => <AwardCardSkeleton key={index} />)}
        {/* <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard /> */}
      </HStack>
    </Scroll>
  );
}
