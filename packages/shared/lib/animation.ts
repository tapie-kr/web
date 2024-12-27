import { Transition } from 'framer-motion'

export const ease = [0.4, 0, 0.2, 1] as const

export function getTransition(duration?: number, delay?: number): Transition {
  return {
    duration: duration ?? 0.35,
    ease,
    delay,
  }
}
