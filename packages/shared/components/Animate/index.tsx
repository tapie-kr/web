'use client'

import * as s from './styles.css'

import { motion } from 'framer-motion'
import { HTMLAttributes, ReactNode, useContext } from 'react'
import { AnimateContext } from './shared'
import { getTransition } from '~/lib/animation'
import { UtilityClass } from '@tapie-kr/inspire-react/variables'
import cn from 'classnames'

type AnimateProps = HTMLAttributes<HTMLSpanElement> & {
  order?: number
  fullWidth?: boolean
  children?: ReactNode
}

export default function Animate(props: AnimateProps) {
  const { order, fullWidth, className, children, ...restProps } = props
  const { initial, animate, duration, initialDelay, delayGap, hideOverflow } = useContext(AnimateContext)

  const transition = getTransition({
    duration,
    delay: (initialDelay || 0) + (order || 0) * (delayGap || 0),
  })

  const classNames = [
    s.animate,
    fullWidth && s.fullWidth,
    hideOverflow && UtilityClass.HideOverflow,
    className,
  ]

  return <>
    <span className={cn(classNames)} {...restProps}>
      <motion.span
        className={cn(s.animate, fullWidth && s.fullWidth)}
        initial={initial} animate={animate} transition={transition}
      >{children}</motion.span>
    </span>
  </>
}
