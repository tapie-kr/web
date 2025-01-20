import * as s from './styles.css'

import { HStack } from '@cottons-kr/react-foundation'
import AwardItem from './award-item'
import awards from '@/../public/_awards.json'
import { spacingVars } from '@tapie-kr/inspire-react'

export default function HomeAwardsSectionAwardList() {
  return <>
    <HStack className={s.awardList} gap={spacingVars.base} wrap>
      {awards.map((award, i) => (
        <AwardItem key={i} {...award} order={i} />
      ))}
    </HStack>
  </>
}
