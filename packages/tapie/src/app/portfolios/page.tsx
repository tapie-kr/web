import Hero from '@/sections/portfolios/index/Hero';
import Members from '@/sections/portfolios/index/Members';
import Projects from '@/sections/portfolios/index/Projects';
import RecentProjects from '@/sections/portfolios/index/RecentProjects';

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <RecentProjects />
      {/* <RecentAwards /> */}
      <Members />
      <Projects />
    </>
  );
}
