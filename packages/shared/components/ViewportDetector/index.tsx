'use client'

import { motion } from 'framer-motion'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { ViewportDetectorContext } from './context'

type ViewportDetectorProps = {
  once?: boolean
  children?: ReactNode
}

export default function ViewportDetector(props: ViewportDetectorProps) {
  const [isInView, setIsInView] = useState(false)

  return <>
    <ViewportDetectorContext.Provider value={{ isInView, setIsInView }}>
      <motion.div
        onViewportEnter={() => setIsInView(true)}
        onViewportLeave={() => !props.once && setIsInView(false)}
      >{props.children}</motion.div>
    </ViewportDetectorContext.Provider>
  </>
}
