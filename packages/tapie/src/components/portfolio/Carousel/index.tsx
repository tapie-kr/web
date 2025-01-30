import { carousel } from './styles.css';

import { AspectRatio, radiusVars, Skeleton } from '@tapie-kr/inspire-react';

export default function PortfolioCarousel() {
  return (
    <AspectRatio
      className={carousel}
      ratio={16 / 9}
    >
      <Skeleton
        fullWidth
        fullHeight
        borderRadius={radiusVars.rounded}
      />
    </AspectRatio>
  );
}
