import { awardItemStyle, awardListStyle } from './styles.css'

import { Flex, HStack } from '@cottons-kr/react-foundation'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'

export default function HomeAwardsSectionAwardList() {
  return <>
    <HStack className={awardListStyle} gap={ComponentVariable.Spacing.Base} wrap>
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
    <Flex className={awardItemStyle} gap={ComponentVariable.Spacing.Micro}>
      <Typo.Base weight={Weight.Medium}>9th Highthon 마루상</Typo.Base>
      <Typo.Petite color={ColorVariable.Content.Muted} weight={Weight.Semibold}>박시원</Typo.Petite>
    </Flex>
  </>
}
