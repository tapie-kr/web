import * as s from './styles/section.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { Typo, Tag, Weight } from '@tapie-kr/inspire-react'
import Marquee from './marquee'

export default function HomeJourneySection() {
  return <>
    <VStack className={s.section} gap={Spacing.Medium} align='center'>
      <Flex className={s.title} fullWidth gap={Spacing.Base} justify='between'>
        <Typo.Jumbo weight={Weight.Semibold}>그동안 우리들의 여정</Typo.Jumbo>
        <Flex className={s.viewMore} gap={Spacing.Moderate}>
          <Typo.Moderate tag={Tag.P} color={Color.Content.Default} weight={Weight.Medium}>
            TAPIE의 부원들이 제작해온 멋진 작품들입니다.
            자유롭게 관람해주세요!
          </Typo.Moderate>
        </Flex>
      </Flex>
      <VStack className={s.marqueeGroup} gap={Spacing.Base}>
        <Marquee direction='left' speed={55} />
        <Marquee direction='right' speed={40} />
        <Marquee direction='left' speed={80} />
      </VStack>
    </VStack>
  </>
}
