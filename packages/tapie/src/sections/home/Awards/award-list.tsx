import * as s from './styles.css'

import { HStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import AwardItem from './award-item'
import awards from '@/../public/_awards.json'

export default function HomeAwardsSectionAwardList() {
  return <>
    <HStack className={s.awardList} gap={Spacing.Base} wrap>
      {awards.map((award, i) => (
        <AwardItem key={i} {...award} order={i} />
      ))}
    </HStack>
  </>
}
