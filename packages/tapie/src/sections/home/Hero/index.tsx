'use client'

import * as s from './styles.css'

import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import { Typo } from '@tapie-kr/inspire-react'
import MetallicTape from './assets/metallic-tape.png'
import TapieGroup from './assets/tapie-group.webp'
import { Color, Spacing, UtilityClass } from '@tapie-kr/inspire-react/variables'
import Image from 'next/image'
import { useState } from 'react'
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector'
import { AnimatedText, HeroContext, HeroText, heroTextProps } from './shared'

export default function HomeHeroSection() {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  return <>
    <HeroContext.Provider value={{ shouldAnimate, setShouldAnimate }}>
      <ViewportDetector toggle={setShouldAnimate}>
        <VStack className={s.section} gap={Spacing.Large}>
          <VStack tag='h1' className={s.hero} aria-labelledby='세상의 간극을 이어붙이는 TAPIE 우리의 이야기들'>
            <HStack className={s.upperText} fitContent wrap align='center' aria-hidden>
              <AnimatedText direction='up'>
                <HeroText>세상의 간극을</HeroText>
              </AnimatedText>
              <AnimatedText direction='down' delay={0.25}>
                <HStack align='center' fitContent>
                  <HeroText>이</HeroText>
                  <Flex className={s.tapeContainer} align='center' justify='center'>
                    <img className={s.tapeImage} src={MetallicTape.src} alt='' />
                  </Flex>
                  <HeroText>어 붙이는</HeroText>
                </HStack>
              </AnimatedText>
            </HStack>

            <Typo.Giant
              {...heroTextProps}
              className={s.lowerText}
              color={Color.Content.Emphasized}
              aria-hidden
            >
              <AnimatedText className={UtilityClass.DesktopOnly} direction='up' delay={0.5}>TAPIE </AnimatedText>
              <AnimatedText delay={0.75}>우리의 이야기들</AnimatedText>
            </Typo.Giant>
          </VStack>

          <Image className={s.tapieImage} src={TapieGroup} alt='TAPIE 단체 사진' />
        </VStack>
      </ViewportDetector>
    </HeroContext.Provider>
  </>
}
