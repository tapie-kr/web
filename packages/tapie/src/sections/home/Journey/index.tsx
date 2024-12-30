import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { sectionStyle, titleStyle, viewMoreStyle } from './styles.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'

export default function HomeJourneySection() {
  return <>
    <VStack className={sectionStyle}>
      <Flex className={titleStyle} gap={ComponentVariable.Spacing.Base} justify='between'>
        <Typo.Jumbo weight={Weight.Semibold}>그동안 우리들의 여정</Typo.Jumbo>
        <Flex className={viewMoreStyle} gap={ComponentVariable.Spacing.Moderate}>
          <Typo.Moderate color={ColorVariable.Content.Default} weight={Weight.Medium}>24년간 부원들이 제작해온 멋진 작품들입니다.</Typo.Moderate>
        </Flex>
      </Flex>
    </VStack>
  </>
}
