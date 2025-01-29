import * as s from './styles.css';

import { Flex, HStack, VStack } from '@cottons-kr/react-foundation';

import { colorVars, spacingVars, Tag, Typo, utilityClass, Weight } from '@tapie-kr/inspire-react';
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector';
import Image from 'next/image';
import MetallicTape from './assets/metallic-tape.webp';
import TapieGroup from './assets/tapie-group.webp';
import { Animate, HeroText } from './shared';

export default function HomeHeroSection() {
  return (
    <ViewportDetector shouldOnce>
      <VStack gap={spacingVars.large}>
        <VStack
          tag='h1'
          className={s.hero}
          aria-labelledby='세상의 간극을 이어붙이는 TAPIE 우리의 이야기들'
        >
          <HStack
            className={s.upperText}
            fitContent
            wrap
            align='center'
            aria-hidden
          >
            <div className={s.overflowHidden}>
              <Animate order={0}>
                <HeroText>세상의 간극을</HeroText>
              </Animate>
            </div>
            <Animate order={1}>
              <HStack
                align='center'
                fitContent
              >
                <HeroText>이</HeroText>
                <Flex
                  className={s.tapeContainer}
                  align='center'
                  justify='center'
                >
                  <img
                    className={s.tapeImage}
                    src={MetallicTape.src}
                    alt=''
                  />
                </Flex>
                <HeroText>어 붙이는</HeroText>
              </HStack>
            </Animate>
          </HStack>

          <Typo.Giant
            className={s.lowerText}
            tag={Tag.SPAN}
            weight={Weight.SEMIBOLD}
            color={colorVars.content.emphasized}
            aria-hidden
          >
            <Animate
              className={utilityClass.desktopOnly}
              order={2}
            >
              TAPIE{' '}
            </Animate>
            <Animate order={3}>우리의 이야기들</Animate>
          </Typo.Giant>
        </VStack>

        <Image
          className={s.tapieImage}
          src={TapieGroup}
          alt='TAPIE 단체 사진'
        />
      </VStack>
    </ViewportDetector>
  );
}
