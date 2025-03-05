'use client';

import { useMediaQuery } from '@tapie-kr/inspire-react';

import { type PortfolioDetail } from '@/app/portfolios/[id]/page';
import DefaultHero from './variants/default';
import InstagramHero from './variants/instagram';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function PortfoliosDetailHeroSection(_props: Props) {
  const isMobile = useMediaQuery();

  return isMobile ? <InstagramHero {..._props} /> : <DefaultHero {..._props} />;
}
