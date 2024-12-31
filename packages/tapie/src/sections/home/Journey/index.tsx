import { sectionStyle, titleStyle, viewMoreStyle } from './styles.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { Typo, TypographyTag, TypographyWeight as Weight } from '@tapie-kr/inspire-react'

export default function HomeJourneySection() {
  return <>
    <VStack className={sectionStyle}>
      <Flex className={titleStyle} gap={ComponentVariable.Spacing.Base} justify='between'>
        <Typo.Jumbo weight={Weight.Semibold}>그동안 우리들의 여정</Typo.Jumbo>
        <Flex className={viewMoreStyle} gap={ComponentVariable.Spacing.Moderate}>
          <Typo.Moderate tag={TypographyTag.P} color={ColorVariable.Content.Default} weight={Weight.Medium}>
            TAPIE의 부원들이 제작해온 멋진 작품들입니다.
            자유롭게 관람해주세요!
          </Typo.Moderate>
        </Flex>
      </Flex>
    </VStack>
  </>
}
