'use client'

import { yearItemActive, yearItem, yearSelector } from './styles.css'

import { HStack } from '@cottons-kr/react-foundation'
import { useContext, useMemo } from 'react'
import { HomeAwardsSectionContext } from './shared'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import cn from 'classnames'

export default function HomeAwardsSectionYearSelector() {
  return <>
    <HStack className={yearSelector} gap={ComponentVariable.Spacing.Petite} wrap>{
      Array.from({ length: 6 }, (_, i) => {
        return <YearItem key={i} year={2024 - i} />
      })
    }</HStack>
  </>
}

type YearSelectorItemProps = {
  year: number
}

function YearItem(props: YearSelectorItemProps) {
  const { selectedYear, setSelectedYear } = useContext(HomeAwardsSectionContext)
  const isSelected = useMemo(() => selectedYear === props.year, [selectedYear, props.year])

  return <>
    <button
      className={cn(yearItem, isSelected && yearItemActive)}
      onClick={() => setSelectedYear(props.year)}
    >
      <Typo.Base weight={Weight.Semibold}>{props.year}</Typo.Base>
    </button>
  </>
}
