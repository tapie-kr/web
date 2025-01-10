import Hero from '@/sections/portfolios/index/Hero'
import Members from '@/sections/portfolios/index/Members'
import RecentAwards from '@/sections/portfolios/index/RecentAwards'
import RecentProjects from '@/sections/portfolios/index/RecentProjects'

export default function PortfolioPage() {
  return <>
    <Hero />
    <RecentProjects />
    <RecentAwards />
    <Members />
  </>
}
