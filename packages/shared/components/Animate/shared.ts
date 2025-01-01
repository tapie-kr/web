import { TargetAndTransition, Target } from 'framer-motion'
import { createContext } from 'react'

export type AnimateContextType = {
  initialDelay?: number
  delayGap?: number
  duration?: number
  hideOverflow?: boolean
  initial: Target
  animate: TargetAndTransition
}

export const AnimateContext = createContext({} as AnimateContextType)
