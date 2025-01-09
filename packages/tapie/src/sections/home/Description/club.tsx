'use client'

import * as s from './styles.css'

import { HStack } from '@cottons-kr/react-foundation'
import { Tag } from '@tapie-kr/inspire-react'
import { Spacing } from '@tapie-kr/inspire-react/variables'
import { motion } from 'framer-motion'
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context'
import { useContext } from 'react'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'
import { ParagraphText } from '.'

type ClubProps = {
  order: number
  icon: SVGComponent
  name: string
}

export default function HomeDescriptionSectionClub(props: ClubProps) {
  const { isInView } = useContext(ViewportDetectorContext)

  const transition = getTransition({ duration: 0.5, delay: props.order * 0.12 + 0.4 })
  const resetTransition = getTransition({ duration: 0 })
  const initial = {
    x: -30, opacity: 0,
    transition: resetTransition,
  }
  const animate = isInView ?
    { x: 0, opacity: 1 } :
    initial

  return <>
    <HStack tag={Tag.Span} align='center' fitContent gap={Spacing.Micro}>
      <motion.span initial={initial} animate={animate} transition={transition}>
        <props.icon className={s.clubIconStyle} aria-hidden />
      </motion.span>
      <ParagraphText>{props.name}</ParagraphText>
    </HStack>
  </>
}
