import { Tag, Typo, Weight } from '@tapie-kr/inspire-react'
import { Color } from '@tapie-kr/inspire-react/variables'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'
import { motion } from 'framer-motion'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type HeroContextType = {
  shouldAnimate: boolean
  setShouldAnimate: Dispatch<SetStateAction<boolean>>
}

export const HeroContext = createContext({} as HeroContextType)

export const heroTextProps = {
  tag: Tag.Span,
  weight: Weight.Semibold,
  color: Color.Content.Default,
  nowrap: true,
}

export function HeroText(props: ChildrenProp) {
  return <>
    <Typo.Giant {...heroTextProps}>{props.children}</Typo.Giant>
  </>
}

type AnimatedTextProps = {
  delay?: number
  direction?: 'up' | 'down'
  className?: string
  children?: Children
}

export function AnimatedText(props: AnimatedTextProps) {
  const { shouldAnimate } = useContext(HeroContext)

  const initialY = props.direction === 'up' ? '-100%' : '100%'
  const transition = getTransition({ duration: 0.6, delay: props.delay })
  const resetTransition = getTransition({ duration: 0 })
  const animate = shouldAnimate ?
    { y: 0, transition  } :
    { y: initialY, transition: resetTransition }
  
  return <>
    <motion.div
      className={props.className}
      initial={{ y: initialY }}
      animate={animate}
    >{props.children}</motion.div>
  </>
}
