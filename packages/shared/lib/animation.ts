import { Transition } from 'framer-motion'

export const ease = [0.4, 0, 0.2, 1] as const

type TransitionOptions = {
  duration?: number
  delay?: number
}

export function getTransition(options: TransitionOptions = {}): Transition {
  const { duration, delay } = options

  return {
    duration: duration ?? 0.35,
    ease,
    delay,
  }
}
