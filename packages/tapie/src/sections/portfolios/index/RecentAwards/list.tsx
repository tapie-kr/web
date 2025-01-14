'use client'

import AwardCard from '@/components/award/Card'
import { HStack } from '@cottons-kr/react-foundation'
import { spacingVars } from '@tapie-kr/inspire-react'
import Scroll from '@tapie-kr/web-shared/components/Scroll'

export default function PortfoliosRecentAwardsSectionList() {
  
  return <>
    <Scroll direction='row'>
      <HStack fitContent gap={spacingVars.giant}>
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
        <AwardCard />
      </HStack>
    </Scroll>
  </>
}
