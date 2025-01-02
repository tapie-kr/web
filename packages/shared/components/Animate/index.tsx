'use client'

import * as s from './styles.css'

import { motion } from 'framer-motion'
import { ReactNode, useContext } from 'react'
import { AnimateContext } from './shared'
import { getTransition } from '~/lib/animation'
import { UtilityClass } from '@tapie-kr/inspire-react/variables'
import cn from 'classnames'

type AnimateProps = {
  order?: number
  fullWidth?: boolean
  className?: string
  children?: ReactNode
}

export default function Animate(props: AnimateProps) {
  const { initial, animate, duration, initialDelay, delayGap, hideOverflow } = useContext(AnimateContext)

  const transition = getTransition({
    duration,
    delay: (initialDelay || 0) + (props.order || 0) * (delayGap || 0),
  })

  const classNames = [
    s.animate,
    props.fullWidth && s.fullWidth,
    hideOverflow && UtilityClass.HideOverflow,
    props.className,
  ]

  return <>
    <span className={cn(classNames)}>
      <motion.span
        className={cn(s.animate, props.fullWidth && s.fullWidth)}
        initial={initial} animate={animate} transition={transition}
      >{props.children}</motion.span>
    </span>
  </>
}
