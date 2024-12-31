import * as s from './styles.css'

import { Flex, HStack } from '@cottons-kr/react-foundation'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'

export default function HomeAwardsSectionAwardList() {
  return <>
    <HStack className={s.awardList} gap={Spacing.Base} wrap>
      <AwardItem />
      <AwardItem />
      <AwardItem />
      <AwardItem />
      <AwardItem />
      <AwardItem />
      <AwardItem />
      <AwardItem />
      <AwardItem />
      <AwardItem />
    </HStack>
  </>
}

function AwardItem() {
  return <>
    <Flex className={s.awardItem} gap={Spacing.Micro}>
      <Typo.Base weight={Weight.Medium}>9th Highthon 마루상</Typo.Base>
      <Typo.Petite color={Color.Content.Muted} weight={Weight.Semibold}>박시원</Typo.Petite>
    </Flex>
  </>
}
