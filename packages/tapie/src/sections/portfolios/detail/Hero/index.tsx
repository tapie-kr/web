'use client';

import { useMediaQuery } from '@tapie-kr/inspire-react';
import DefaultHero from './variants/default';
import InstagramHero from './variants/instagram';

export default function PortfoliosDetailHeroSection() {
  const isMobile = useMediaQuery();

  return isMobile ? <InstagramHero /> : <DefaultHero />;
}
