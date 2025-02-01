'use client';

import * as s from './styles.css';

import { Flex, VStack } from '@cottons-kr/react-foundation';

import { Size, spacingVars, Tag, TAPIESymbol, Typo, Weight } from '@tapie-kr/inspire-react';
import Animate from '@tapie-kr/web-shared/components/Animate';
import AnimateProvider from '@tapie-kr/web-shared/components/Animate/provider';
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector';
import Artist from './assets/artist.svg';
import BeachWithUmbrella from './assets/beach_with_umbrella.svg';
import Figma from './assets/figma.svg';
import Git from './assets/git.svg';
import Html5 from './assets/html5.svg';
import MobilePhone from './assets/mobile_phone.svg';
import Notepad from './assets/notepad.svg';
import React from './assets/react.svg';
import List from './list';

export default function HomeUnitsSection() {
  return (
    <ViewportDetector shouldOnce>
      <VStack
        className={s.section}
        align='center'
        gap={spacingVars.jumbo}
      >
        <AnimateProvider
          hideOverflow
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          initialDelay={0.1}
          delayGap={0.1}
          duration={0.65}
        >
          <VStack
            className={s.title}
            align='start'
            gap={spacingVars.base}
          >
            <Animate order={0}>
              <TAPIESymbol
                hasLabel
                size={Size._24}
              />
            </Animate>

            <Animate order={1}>
              <Typo.Jumbo
                tag={Tag.H2}
                weight={Weight.SEMIBOLD}
              >
                유닛 소개
              </Typo.Jumbo>
            </Animate>
          </VStack>
        </AnimateProvider>

        <Flex
          fullWidth
          className={s.content}
          justify='between'
        >
          <AnimateProvider
            initialDelay={0.4}
            delayGap={0.06}
            duration={0.8}
            initial={{
              y:       20,
              opacity: 0,
              scale:   0.98,
            }}
            animate={{
              y:       0,
              opacity: 1,
              scale:   1,
            }}
          >
            <List
              order={0}
              title='개발자'
              features={[
                {
                  title:       'HTML CSS JS 기초',
                  description: 'React를 본격적으로 시작하기 전에 HTML CSS JS 기초를 배워요.',
                  icon:        Html5,
                },
                {
                  title: 'React 생태계',
                  description:
                    '모던 웹 개발에서 필수적인 역량, React 기술과 React 생태계에 걸맞는 앱 프레임워크, React Native를 배워요.',
                  icon: React,
                },
                {
                  title: '다양한 팀 프로젝트',
                  description:
                    '다양한 팀 프로젝트를 통해 협업 능력을 상승시키고, 방학에는 배운 내용을 바탕으로 퀄리티 높은 프로젝트를 진행해요.',
                  icon: Notepad,
                },
                {
                  title: '버전 관리 시스템',
                  description:
                    'Git과 GitHub으로 효율적으로 버전을 관리하고 협업하는 방법을 배워요.',
                  icon: Git,
                },
              ]}
            />
          </AnimateProvider>

          <AnimateProvider
            initialDelay={0.7}
            delayGap={0.06}
            duration={0.8}
            initial={{
              y:       20,
              opacity: 0,
              scale:   0.98,
            }}
            animate={{
              y:       0,
              opacity: 1,
              scale:   1,
            }}
          >
            <List
              order={1}
              title='디자이너'
              features={[
                {
                  title:       '피그마 기초',
                  description: 'UI·UX 제작 전 툴에 대한 이해도를 높여나가요.',
                  icon:        Figma,
                },
                {
                  title:       'UI·UX 기초',
                  description: '앱 UI·UX 제작을 통해 UI에 대한 이해도를 높여나가요.',
                  icon:        MobilePhone,
                },
                {
                  title:       '방학 프로젝트',
                  description: '여름방학 시즌에 개발자와 함께 프로젝트를 진행해요.',
                  icon:        BeachWithUmbrella,
                },
                {
                  title:       'UI·UX 심화',
                  description: '디자인 시스템 등을 이용하여 UI·UX를 더욱 심화적으로 탐구해요.',
                  icon:        Artist,
                },
              ]}
            />
          </AnimateProvider>
        </Flex>
      </VStack>
    </ViewportDetector>
  );
}
