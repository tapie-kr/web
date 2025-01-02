import { Transition } from 'framer-motion'

export const ease = [0.4, 0, 0.2, 1] as const

export const resetTransition = getTransition({ delay: 0, duration: 0 })

type TransitionOptions = {
  duration?: number
  delay?: number
}

export function getTransition(options: TransitionOptions = {}): Transition {
  const { duration, delay } = options

  return {
    duration: duration ?? 0.5,
    ease, delay,
  } satisfies Transition
}
