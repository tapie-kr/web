'use client';

import { Grid, spacingVars } from '@tapie-kr/inspire-react';
import PortfolioItem from '@/components/portfolio/Item';
import PortfolioItemSkeleton from '@/components/portfolio/Item/skeleton';

import { Temporal } from '@js-temporal/polyfill';

export default function PortfolioProjectsSectionList() {
  return <PortfolioItemSkeleton />;

  return (
    <Grid
      fullWidth
      rowGap={spacingVars.base}
      columnGap={spacingVars.petite}
      columnCount={2}
    >
      {Array.from({ length: 7 }).map((_, index) => (
        <PortfolioItem
          key={index}
          name='작품 이름'
          catchPhrase='작품 설명'
          thumbnailUri='https://picsum.photos/200/300'
          releasedAt={Temporal.Now.plainDateTimeISO()}
          portfolioUri='/portfolios/1'
        />
      ))}
    </Grid>
  );
}
