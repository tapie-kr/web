'use client'

import { contentStyle, dropdown, icon, rotatedIcon } from './styles.css'

import { HStack, VStack } from '@cottons-kr/react-foundation'
import { GlyphIcon, Icon, Typo, TypographyWeight } from '@tapie-kr/inspire-react'
import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { useState } from 'react'
import { motion } from 'framer-motion'
import cn from 'classnames'
import { useToggle } from '@tapie-kr/web-shared/hooks/use-toggle'
import { getTransition } from '@tapie-kr/web-shared/lib/animation'

type HomeFAQSectionQuestionDropdownProps = {
  question: string
  answer: string
}

export default function HomeFAQSectionQuestionDropdown(props: HomeFAQSectionQuestionDropdownProps) {
  const [isOpened, toggleOpened] = useToggle()

  return <>
    <div className={dropdown} onClick={toggleOpened}>
      <motion.div
        className={contentStyle}
        initial={{ height: 26 }} animate={{ height: isOpened ? 'auto' : 26 }}
        transition={getTransition()}
      >
        <VStack gap={ComponentVariable.Spacing.Moderate}>
          <HStack justify='between'>
            <Typo.Moderate
              color={ColorVariable.Content[isOpened ? 'Emphasized' : 'Default']}
              weight={TypographyWeight[isOpened ? 'Medium' : 'Regular']}
            >{props.question}</Typo.Moderate>
            <Icon className={cn(icon, isOpened ? '' : rotatedIcon)} name={GlyphIcon.KeyboardArrowUp} />
          </HStack>

          <motion.div
            animate={{
              opacity: isOpened ? 1 : 0,
              y: isOpened ? 0 : -20,
            }}
            transition={getTransition({ delay: isOpened ? 0.06 : 0 })}
          >
            <Typo.Base>{props.answer}</Typo.Base>
          </motion.div>
        </VStack>
      </motion.div>
    </div>
  </>
}
