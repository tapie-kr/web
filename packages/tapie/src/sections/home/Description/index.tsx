'use client'

import * as s from './styles.css'

import { HStack, VStack } from '@cottons-kr/react-foundation'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import Animate from '@tapie-kr/web-shared/components/Animate'
import AnimateProvider from '@tapie-kr/web-shared/components/Animate/provider'
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector'
import Club from './club'
import StatsCard from './static-card'

import AppplePi from './assets/appplepi.svg'
import Edcan from './assets/edcan.svg'
import Iwop from './assets/iwop.svg'

export default function HomeDescriptionSection() {
  return <>
    <ViewportDetector once>
      <AnimateProvider
        initial={{ y: `calc(${Spacing.Jumbo} * -1)`, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        initialDelay={0.2} delayGap={0.035} duration={0.9}
      >
        <VStack className={s.section} align='center' gap={Spacing.Jumbo}>
          <VStack className={s.content}>
            <VStack tag={Tag.P}>
              <Animate order={0}>
                <ParagraphText>TAPIE는 기존 선린인터넷고등학교에 있던</ParagraphText>
              </Animate>
              <Animate order={1}>
                <HStack className={s.clubs} wrap tag={Tag.Span}>
                  <ParagraphText>3개의 웹, 앱 동아리 </ParagraphText>
                  <Club order={0} icon={AppplePi} name='App:ple Pi, ' />
                  <Club order={1} icon={Edcan} name='EDCAN, ' />
                  <Club order={2} icon={Iwop} name='IWOP' />
                  <ParagraphText>이 합쳐져</ParagraphText>
                </HStack>
              </Animate>
              <Animate order={2}>
                <ParagraphText>2024년에 새롭게 만들어진 동아리입니다.</ParagraphText>
              </Animate>
            </VStack>

            <VStack>
              <Animate order={3}>
                <ParagraphText>세상에 존재하는 다양한 간극을 소프트웨어로 이어붙이자는 신념 아래, </ParagraphText>
              </Animate>
              <Animate order={4}>
                <ParagraphText>우리들의 전공을 활용하여 오늘도 노력하고 있습니다.</ParagraphText>
              </Animate>
            </VStack>
          </VStack>

          <AnimateProvider
            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            initialDelay={0.9} delayGap={0.1} duration={0.5}
          >
            <HStack className={s.stats} gap={Spacing.Large} wrap>
              <StatsCard order={0} label='지금까지' value={24} unit='년' />
              <StatsCard order={1} label='동아리 부원' value={725} unit='명' />
              <StatsCard order={2} label='포트폴리오' value={372} unit='개' />
              <StatsCard order={3} label='대회 수상' value={192} unit='회' />
            </HStack>
          </AnimateProvider>
        </VStack>
      </AnimateProvider>
    </ViewportDetector>
  </>
}

export function ParagraphText(props: ChildrenProp) {
  return <>
    <Typo.Large
      className={s.paragraph}
      tag={Tag.Span}
      weight={Weight.Medium}
    >{props.children}</Typo.Large>
  </>
}
