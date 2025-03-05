import { carousel } from './styles.css';

import {
  AspectRatio,
  Image,
  radiusVars,
  Skeleton,
} from '@tapie-kr/inspire-react';

import { type PortfolioDetail } from '@/app/portfolios/[id]/page';

type Props = Pick<PortfolioDetail, 'thumbnailUri'> & {
  pending: boolean;
};

export default function PortfolioCarousel({ pending, thumbnailUri }: Props) {
  if (pending) {
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

  return (
    <AspectRatio
      className={carousel}
      ratio={16 / 9}
    >
      <Image
        fullHeight
        fullWidth
        src={thumbnailUri ?? ''}
        alt={thumbnailUri ?? ''}
      />
    </AspectRatio>
  );
}
