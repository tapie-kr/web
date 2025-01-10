import * as s from './styles/section.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Color, Spacing, UtilityClass } from '@tapie-kr/inspire-react/variables'
import { Typo, Tag, Weight } from '@tapie-kr/inspire-react'
import Marquee from './marquee'
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector'
import AnimateProvider from '@tapie-kr/web-shared/components/Animate/provider'
import Animate from '@tapie-kr/web-shared/components/Animate'
import { splitArray, shuffle } from '@/utils/array'

export default async function HomeJourneySection() {
  const { default: thumbnailList } = await import('@/../public/thumbnails/_list.json')
  const [first, second] = splitArray(thumbnailList, thumbnailList.length / 2).map(shuffle)

  return <>
    <ViewportDetector once>
      <AnimateProvider
        initial={{ y: '100%' }} animate={{ y: 0 }}
        initialDelay={0.1} delayGap={0.1} duration={0.65}
        hideOverflow
      >
        <VStack id='journey' className={s.section} gap={Spacing.Medium} align='center'>
          <Flex className={s.title} fullWidth gap={Spacing.Base} justify='between'>
            <Animate order={1}>
              <Typo.Jumbo weight={Weight.SEMIBOLD}>그동안 우리들의 여정</Typo.Jumbo>
            </Animate>
            <VStack className={s.viewMore} gap={Spacing.Moderate}>
              <Animate order={2}>
                <Typo.Moderate tag={Tag.P} color={Color.Content.Default} weight={Weight.MEDIUM}>
                  TAPIE의 부원들이 제작해온 멋진 작품들입니다.
                  자유롭게 관람해주세요!
                </Typo.Moderate>
              </Animate>
              <Animate order={3} className={UtilityClass.ForceHide}>
                <Typo.Petite>포트폴리오 구경하기</Typo.Petite>
              </Animate>
            </VStack>
          </Flex>
          <VStack className={s.marqueeGroup} gap={Spacing.Base}>
            <Marquee assets={first} direction='left' speed={55} />
            <Marquee assets={second} direction='right' speed={40} />
          </VStack>
        </VStack>
      </AnimateProvider>
    </ViewportDetector>
  </>
}
