import { Grid, spacingVars } from '@tapie-kr/inspire-react';
import PortfolioItem from '@/components/portfolio/Item';

export default function PortfolioProjectsSectionList() {
  return (
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
  );
}
