'use client'

import { yearItemActive, yearItem, yearSelector } from './styles.css'

import { HStack } from '@cottons-kr/react-foundation'
import { useContext, useMemo } from 'react'
import { HomeAwardsSectionContext } from './shared'
import { Typo, TypographyWeight as Weight } from '@tapie-kr/inspire-react'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'

export default function HomeAwardsSectionYearSelector() {
  return <>
    <HStack className={yearSelector} gap={Spacing.Petite} wrap>{
      <YearItem year={2024} />
    }</HStack>
  </>
}

type YearSelectorItemProps = {
  year: number
}

function YearItem(props: YearSelectorItemProps) {
  const { isInView } = useContext(ViewportDetectorContext)
  const { selectedYear, setSelectedYear } = useContext(HomeAwardsSectionContext)
  const isSelected = useMemo(() => selectedYear === props.year, [selectedYear, props.year])

  const transition = getTransition({ duration: 0.65, delay: (2024 - props.year) * 0.05 + 0.5 })
  const resetTransition = getTransition({ duration: 0 })
  const animate = isInView ?
    { x: 0, opacity: 1, transition } :
    { x: 25, opacity: 0, transition: resetTransition }

  return <>
    <motion.button
      className={cn(yearItem, isSelected && yearItemActive)}
      initial={{ x: 15, opacity: 0, }} animate={animate}
      onClick={() => setSelectedYear(props.year)}
    >
      <Typo.Base weight={Weight.Semibold}>{props.year}</Typo.Base>
    </motion.button>
  </>
}
