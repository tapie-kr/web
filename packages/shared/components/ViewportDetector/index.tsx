'use client'

import { useInView } from 'framer-motion'
import { ReactNode, RefObject, useRef } from 'react'
import { ViewportDetectorContext } from './context'

type ViewportDetectorProps = {
  once?: boolean
  ref?: RefObject<HTMLElement>
  children?: ReactNode
}

export default function ViewportDetector(props: ViewportDetectorProps) {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(props.ref ?? containerRef, {
    amount: 0.1,
    once: props.once,
  })

  return <>
    <ViewportDetectorContext.Provider value={{ isInView }}>
      <section ref={containerRef}>{props.children}</section>
    </ViewportDetectorContext.Provider>
  </>
}
