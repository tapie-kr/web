import Award from '@/sections/portfolios/detail/Award';
import Download from '@/sections/portfolios/detail/Download';
import Hero from '@/sections/portfolios/detail/Hero';
import Team from '@/sections/portfolios/detail/Team';
import Technology from '@/sections/portfolios/detail/Technology';

export default function PortfoliosDetailPage() {
  return (
    <>
      <Hero />
      <Team />
      <Technology />
      <Award />
      <Download />
    </>
  );
}
