import PortfolioItem from '@/components/portfolio/Item';

import { Grid, spacingVars } from '@tapie-kr/inspire-react';

export default function PortfolioProjectsSectionList() {
  return (
    <>
      <Grid
        fullWidth
        rowGap={spacingVars.base}
        columnGap={spacingVars.petite}
        columnCount={2}
      >
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </Grid>
    </>
  );
}
