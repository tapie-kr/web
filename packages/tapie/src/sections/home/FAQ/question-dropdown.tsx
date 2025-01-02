'use client'

import * as s from './styles.css'

import { HStack, VStack } from '@cottons-kr/react-foundation'
import { GlyphIcon, Icon, Typo, TypographyWeight } from '@tapie-kr/inspire-react'
import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { useToggle } from '@tapie-kr/web-shared/hooks/use-toggle'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'
import { useEffect, useRef, useState } from 'react'
import Animate from '@tapie-kr/web-shared/components/Animate'

type HomeFAQSectionQuestionDropdownProps = {
  order: number
  question: string
  children?: Children
}

export default function HomeFAQSectionQuestionDropdown(props: HomeFAQSectionQuestionDropdownProps) {
  const [isOpened, toggleOpened] = useToggle()
  const titleRef = useRef<HTMLDivElement>(null)
  const [titleHeight, setTitleHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setTitleHeight(titleRef.current?.clientHeight ?? 0)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setTitleHeight(titleRef.current?.clientHeight ?? 0)
  }, [titleRef])

  return <>
    <Animate order={props.order} className={s.maxWidth} fullWidth onClick={toggleOpened}>
      <div className={s.dropdown}>
        <motion.div
          className={s.content}
          initial={{ height: titleHeight }} animate={{ height: isOpened ? 'auto' : titleHeight }}
          transition={getTransition({ duration: 0.35 })}
        >
          <VStack gap={Spacing.Moderate}>
            <div ref={titleRef}>
              <HStack align='center' justify='between'>
                <Typo.Moderate
                  color={Color.Content[isOpened ? 'Emphasized' : 'Default']}
                  weight={TypographyWeight[isOpened ? 'Medium' : 'Regular']}
                >{props.question}</Typo.Moderate>
                <motion.div animate={{ rotate: isOpened ? 180 : 0 }} transition={getTransition()}>
                  <Icon name={GlyphIcon.KeyboardArrowUp} />
                </motion.div>
              </HStack>
            </div>

            <motion.div
              animate={{
                opacity: isOpened ? 1 : 0,
                y: isOpened ? 0 : -20,
              }}
              transition={getTransition({ delay: isOpened ? 0.06 : 0 })}
            >{props.children}</motion.div>
          </VStack>
        </motion.div>
      </div>
    </Animate>
  </>
}
