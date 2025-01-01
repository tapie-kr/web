'use client'

import { VStack } from '@cottons-kr/react-foundation'
import { Typo, Weight, Tag } from '@tapie-kr/inspire-react'
import { Spacing, Color } from '@tapie-kr/inspire-react/variables'
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'
import { motion, useMotionValue, animate as animateValue, useTransform } from 'framer-motion'
import { useContext, useEffect } from 'react'

type StatsCardProps = {
  order: number
  label: string
  value: number
  unit: string
}

export default function HomeDescriptionSectionStatsCard(props: StatsCardProps) {
  const { isInView } = useContext(ViewportDetectorContext)
  const rawValue = useMotionValue(props.value / 2)
  const value = useTransform(rawValue, Math.round)

  const transition = getTransition({ duration: 0.5, delay: props.order * 0.1 + 0.9 })
  const resetTransition = getTransition({ duration: 0 })
  const initial = {
    y: -20, opacity: 0,
    transition: resetTransition,
  }
  const animate = isInView ?
    { y: 0, opacity: 1 } :
    initial

  useEffect(() => {
    if (isInView) {
      const controls = animateValue(rawValue, props.value, {
        duration: 3.5,
        ease: 'easeOut'
      })
      return controls.stop
    }
  }, [isInView])

  return <>
    <motion.div initial={initial} animate={animate} transition={transition}>
      <VStack fitContent gap={Spacing.Tiny}>
        <Typo.Moderate weight={Weight.Semibold} tag={Tag.H3} color={Color.Content.Muted} nowrap>{props.label}</Typo.Moderate>
        <Typo.Medium weight={Weight.Medium} tag={Tag.P} nowrap>
          <motion.span>{value}</motion.span>
          {props.unit}
        </Typo.Medium>
      </VStack>
    </motion.div>
  </>
}
