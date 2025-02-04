import * as s from './styles/section.css';

import { Flex, VStack } from '@cottons-kr/react-foundation';
import {
  colorVars,
  spacingVars,
  Tag,
  Typo,
  utilityClass,
  Weight,
} from '@tapie-kr/inspire-react';

import Animate from '@tapie-kr/web-shared/components/Animate';
import AnimateProvider from '@tapie-kr/web-shared/components/Animate/provider';
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector';
import { shuffle, splitArray } from '@/utils/array';
import Marquee from './marquee';

export default async function HomeJourneySection() {
  const {
    default: thumbnailList,
  } = await import('@/../public/thumbnails/_list.json');

  const [first, second] = splitArray(thumbnailList, thumbnailList.length / 2).map(shuffle);

  return (
    <ViewportDetector shouldOnce>
      <AnimateProvider
        hideOverflow
        initialDelay={0.1}
        delayGap={0.1}
        duration={0.65}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
      >
        <VStack
          id='journey'
          className={s.section}
          gap={spacingVars.medium}
          align='center'
        >
          <Flex
            fullWidth
            className={s.title}
            gap={spacingVars.base}
            justify='between'
          >
            <Animate order={1}>
              <Typo.Jumbo weight={Weight.SEMIBOLD}>그동안 우리들의 여정</Typo.Jumbo>
            </Animate>
            <VStack
              className={s.viewMore}
              gap={spacingVars.moderate}
            >
              <Animate order={2}>
                <Typo.Moderate
                  tag={Tag.P}
                  color={colorVars.content.default}
                  weight={Weight.MEDIUM}
                >
                  TAPIE의 부원들이 제작해온 멋진 작품들입니다. 자유롭게 관람해주세요!
                </Typo.Moderate>
              </Animate>
              <Animate
                order={3}
                className={utilityClass.forceHide}
              >
                <Typo.Petite>포트폴리오 구경하기</Typo.Petite>
              </Animate>
            </VStack>
          </Flex>
          <VStack
            className={s.marqueeGroup}
            gap={spacingVars.base}
          >
            <Marquee
              assets={first}
              direction='left'
              speed={55}
            />
            <Marquee
              assets={second}
              direction='right'
              speed={40}
            />
          </VStack>
        </VStack>
      </AnimateProvider>
    </ViewportDetector>
  );
}
