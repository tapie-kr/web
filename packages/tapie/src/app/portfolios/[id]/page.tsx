import { notFound } from 'next/navigation';
import Award from '@/sections/portfolios/detail/Award';
import Download from '@/sections/portfolios/detail/Download';
import Hero from '@/sections/portfolios/detail/Hero';
import SeeMore from '@/sections/portfolios/detail/SeeMore';
import Team from '@/sections/portfolios/detail/Team';
import Technology from '@/sections/portfolios/detail/Technology';

export default function PortfoliosDetailPage() {
  notFound();

  return (
    <>
      <Hero />
      <Team />
      <Technology />
      <Award />
      <Download />
      <SeeMore />
    </>
  );
}
