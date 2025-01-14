'use client'

import { Tag, Weight, Typo } from '@tapie-kr/inspire-react'
import { colorVars } from '@tapie-kr/inspire-react/lib'
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'
import { motion } from 'framer-motion'
import { useContext } from 'react'

export function HeroText(props: ChildrenProp) {
  const heroTextProps = {
    tag: Tag.SPAN,
    weight: Weight.SEMIBOLD,
    color: colorVars.content.default,
    nowrap: true,
  }

  return <>
    <Typo.Giant {...heroTextProps}>{props.children}</Typo.Giant>
  </>
}

type AnimateProps = {
  order: number
  className?: string
  children?: Children
}

export function Animate(props: AnimateProps) {
  const { isInView } = useContext(ViewportDetectorContext)

  const transition = getTransition({ duration: 0.65, delay: props.order * 0.075 })
  const resetTransition = getTransition({ duration: 0 })
  const animate = isInView ?
    { y: 0, transition  } :
    { y: '100%', transition: resetTransition }
  
  return <>
    <motion.div
      className={props.className}
      initial={{ y: '100%' }}
      animate={animate}
    >{props.children}</motion.div>
  </>
}
