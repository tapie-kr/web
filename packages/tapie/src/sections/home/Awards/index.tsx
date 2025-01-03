'use client'

import * as s from './styles.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing, UtilityClass } from '@tapie-kr/inspire-react/variables'
import { HomeAwardsSectionContext } from './shared'
import { useState } from 'react'
import YearSelector from './year-selector'
import AwardList from './award-list'
import ViewportDetector from '@tapie-kr/web-shared/components/ViewportDetector'
import AnimateProvider from '@tapie-kr/web-shared/components/Animate/provider'
import Animate from '@tapie-kr/web-shared/components/Animate'
import cn from 'classnames'

export default function HomeAwardsSection() {
  const [selectedYear, setSelectedYear] = useState(2024)

  return <>
    <HomeAwardsSectionContext.Provider value={{ selectedYear, setSelectedYear }}>
      <ViewportDetector once>
        <VStack id='awards' align='center'>
          <Flex className={s.section} fullWidth gap={Spacing.Base}>
            <AnimateProvider
              initial={{ y: '100%' }} animate={{ y: 0 }}
              initialDelay={0.1} delayGap={0.2} duration={0.65}
            >
              <VStack gap={Spacing.Moderate}>
                <div className={UtilityClass.HideOverflow}>
                  <Animate order={0}>
                    <Typo.Jumbo weight={Weight.Semibold}>2024년 테이피의 항해</Typo.Jumbo>
                  </Animate>
                </div>
                <div className={cn(UtilityClass.HideOverflow, s.count)}>
                  <Animate order={1}>
                    <Typo.Medium color={Color.Content.Muted} weight={Weight.Semibold}>총 420개+</Typo.Medium>
                  </Animate>
                </div>
              </VStack>
            </AnimateProvider>

            <VStack align='end' gap={Spacing.Petite}>
              <YearSelector />
              <AwardList />
            </VStack>
          </Flex>
        </VStack>
      </ViewportDetector>
    </HomeAwardsSectionContext.Provider>
  </>
}
