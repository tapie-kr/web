'use client';

import {
  colorVars,
  radiusVars,
  Skeleton,
  Typo,
  TypographyVariant,
  useMediaQuery,
  Weight,
} from '@tapie-kr/inspire-react';

import { type PortfolioDetail } from '@/app/portfolios/[id]/page';

type Props = Pick<PortfolioDetail, 'description'> & {
  pending: boolean;
};

export default function HeroDescription(_props: Props) {
  const isMobile = useMediaQuery();
  const { pending, description } = _props;

  if (pending) {
    return (

      <Skeleton
        width={368}
        height={216}
        borderRadius={radiusVars.default}
      />
    );
  }

  return (
    <Typo
      variant={isMobile ? TypographyVariant.PETITE : TypographyVariant.BASE}
      weight={Weight.MEDIUM}
      color={colorVars.content.default}
    >
      {description}
    </Typo>
  );
}
