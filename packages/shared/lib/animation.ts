import { defaultCubicBezier } from '@tapie-kr/inspire-react/lib'
import { Transition } from 'framer-motion'

export const resetTransition = getTransition({ delay: 0, duration: 0 })

type TransitionOptions = {
  duration?: number
  delay?: number
}

export function getTransition(options: TransitionOptions = {}): Transition {
  const { duration, delay } = options

  return {
    duration: duration ?? 0.5,
    ease: defaultCubicBezier,
    delay,
  } satisfies Transition
}
