import { loadMoreButton } from './styles.css';

import {
  Button,
  GlyphIcon,
  Grid,
  spacingVars,
} from '@tapie-kr/inspire-react';
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
      <Button.Default
        fullWidth
        className={loadMoreButton}
        leadingIcon={GlyphIcon.REFRESH}
      >
        더 불러오기
      </Button.Default>
    </Grid>
  );
}
