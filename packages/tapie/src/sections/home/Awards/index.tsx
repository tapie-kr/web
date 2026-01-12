'use client';

import * as s from './styles.css';

import { Flex, VStack } from '@cottons-kr/react-foundation';
import {
  colorVars,
  spacingVars,
  Typo,
  utilityClass,
  Weight,
} from '@tapie-kr/inspire-react';

import Animate from '@tapie-kr/web-shared/components/Animate';
import AnimateProvider from '@tapie-kr/web-shared/components/Animate/provider';
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector';
import cn from 'classnames';
import { useState } from 'react';
import AwardList from './award-list';
import { HomeAwardsSectionContext } from './shared';
import YearSelector from './year-selector';

export default function HomeAwardsSection() {
  // const years = Object.keys(awards).sort((a, b) => Number(b) - Number(a));
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <HomeAwardsSectionContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
      }}
    >
      <ViewportDetector shouldOnce>
        <VStack
          id='awards'
          align='center'
        >
          <Flex
            fullWidth
            className={s.section}
            gap={spacingVars.base}
          >
            <AnimateProvider
              initialDelay={0.1}
              delayGap={0.2}
              duration={0.65}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
            >
              <VStack gap={spacingVars.moderate}>
                <div className={utilityClass.hideOverflow}>
                  <Animate order={0}>
                    <Typo.Jumbo weight={Weight.SEMIBOLD}>
                      2025년 테이피의 항해
                    </Typo.Jumbo>
                  </Animate>
                </div>
                <div className={cn(utilityClass.hideOverflow, s.count)}>
                  <Animate order={1}>
                    <Typo.Medium
                      color={colorVars.content.muted}
                      weight={Weight.SEMIBOLD}
                    >
                      연 평균 22개
                    </Typo.Medium>
                  </Animate>
                </div>
              </VStack>
            </AnimateProvider>
            <VStack
              align='end'
              gap={spacingVars.petite}
            >
              <YearSelector />
              <AwardList />
            </VStack>
          </Flex>
        </VStack>
      </ViewportDetector>
    </HomeAwardsSectionContext.Provider>
  );
}
