import ApplyBannerNow from '@/components/home/ApplyBanner/categories/Now';

import Awards from '@/sections/home/Awards';
import Description from '@/sections/home/Description';
import FAQ from '@/sections/home/FAQ';
import Hero from '@/sections/home/Hero';
import Journey from '@/sections/home/Journey';
import Units from '@/sections/home/Units';

export default function HomePage() {
  return (
    <>
      <ApplyBannerNow />
      <Hero />
      <Description />
      <Journey />
      <Awards />
      <Units />
      <FAQ />
    </>
  );
}
