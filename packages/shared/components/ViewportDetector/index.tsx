'use client'

import { motion } from 'framer-motion'
import { Dispatch, ReactNode, SetStateAction } from 'react'

type ViewportDetectorProps = {
  toggle: Dispatch<SetStateAction<boolean>>
  once?: boolean
  children?: ReactNode
}

export default function ViewportDetector(props: ViewportDetectorProps) {
  return <>
    <motion.div
      onViewportEnter={() => props.toggle(true)}
      onViewportLeave={() => !props.once && props.toggle(false)}
    >{props.children}</motion.div>
  </>
}
