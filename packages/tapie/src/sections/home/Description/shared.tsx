'use client'

import * as s from './styles.css'

import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'
import { motion } from 'framer-motion'
import { useContext } from 'react'

export function ParagraphText(props: ChildrenProp) {
  return <>
    <Typo.Large
      className={s.paragraph}
      tag={Tag.Span}
      weight={Weight.Medium}
    >{props.children}</Typo.Large>
  </>
}

type AnimateProps = {
  order: number
  children: Children
}

export function Animate(props: AnimateProps) {
  const { isInView } = useContext(ViewportDetectorContext)

  const transition = getTransition({ duration: 0.85, delay: props.order * 0.07 + 0.2 })
  const resetTransition = getTransition({ duration: 0 })
  const initial = {
    y: -50, opacity: 0, scale: 1,
    transition: resetTransition,
  }
  const animate = isInView ?
    { y: 0, opacity: 1, scale: 1 } :
    initial

  return <>
    <motion.span
      initial={initial} animate={animate} transition={transition}
    >{props.children}</motion.span>
  </>
}
