'use client'

import { ReactNode, useContext } from 'react'
import { AnimateContext, AnimateContextType } from './shared'
import { ViewportDetectorContext } from '../ViewportDetector/context'
import { getTransition } from '~/lib/animation'

type AnimateProviderProps = AnimateContextType & {
  children?: ReactNode
}

export default function AnimateProvider(props: AnimateProviderProps) {
  const { isInView } = useContext(ViewportDetectorContext)
  
  const initial = {
    ...props.initial,
    transition: getTransition({ duration: 0 }),
  }

  return <>
    <AnimateContext.Provider value={{
      ...props,
      animate: isInView ? props.animate : initial,
    }}>
      {props.children}
    </AnimateContext.Provider>
  </>
}
