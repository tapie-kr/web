import * as s from './styles.css'

import { Flex, HStack, VStack } from '@cottons-kr/react-foundation'
import { Typo, TypographyTag, TypographyWeight } from '@tapie-kr/inspire-react'
import MetallicTape from './assets/metallic-tape.png'
import TapieGroup from './assets/tapie-group.webp'
import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import Image from 'next/image'

export default function HomeHeroSection() {
  const heroProps = {
    className: s.text,
    tag: TypographyTag.Span,
    weight: TypographyWeight.Semibold,
    color: ColorVariable.Content.Default,
  }

  return <>
    <VStack className={s.section} gap={ComponentVariable.Spacing.Large}>
      <VStack tag='h1' className={s.hero} aria-labelledby='세상의 간극을 이어붙이는 TAPIE 우리의 이야기들'>
        <HStack className={s.upperText} fitContent wrap align='center' aria-hidden>
          <Typo.Giant {...heroProps}>세상의 간극을</Typo.Giant>
          <HStack align='center' fitContent>
            <Typo.Giant {...heroProps}>이</Typo.Giant>
            <Flex className={s.tapeContainer} align='center' justify='center'>
              <img className={s.tapeImage} src={MetallicTape.src} alt='' />
            </Flex>
            <Typo.Giant {...heroProps}>어 붙이는</Typo.Giant>
          </HStack>
        </HStack>

        <Typo.Giant
          {...heroProps}
          color={ColorVariable.Content.Emphasized}
          aria-hidden
        >
          <span className={s.desktopOnlyTapie}>TAPIE </span>
          우리의 이야기들
        </Typo.Giant>
      </VStack>

      <Image className={s.tapieImage} src={TapieGroup} alt='TAPIE 단체 사진' />
    </VStack>
  </>
}
