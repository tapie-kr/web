'use client'

import * as s from './styles.css'

import { Flex, VStack } from '@cottons-kr/react-foundation'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { HomeAwardsSectionContext } from './shared'
import { useState } from 'react'
import YearSelector from './year-selector'
import AwardList from './award-list'

export default function HomeAwardsSection() {
  const [selectedYear, setSelectedYear] = useState(2024)

  return <>
    <HomeAwardsSectionContext.Provider value={{ selectedYear, setSelectedYear }}>
      <VStack align='center'>
        <Flex className={s.section} fullWidth gap={Spacing.Base}>
          <VStack gap={Spacing.Moderate}>
            <Typo.Jumbo weight={Weight.Semibold}>2024년 테이피의 항해</Typo.Jumbo>
            <Typo.Medium className={s.count} color={Color.Content.Muted} weight={Weight.Semibold}>총 420개+</Typo.Medium>
          </VStack>

          <VStack align='end' gap={Spacing.Petite}>
            <YearSelector />
            <AwardList />
          </VStack>
        </Flex>
      </VStack>
    </HomeAwardsSectionContext.Provider>
  </>
}
