'use client'

import * as s from './styles/theme-switch.css'

import { useTheme } from 'next-themes'
import { Flex } from '@cottons-kr/react-foundation'
import { Icon, GlyphIcon, colorVars } from '@tapie-kr/inspire-react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { getTransition } from '~/lib/animation'
import { useMemo } from 'react'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme])

  const iconProps = {
    size: 20,
    color: colorVars.content.emphasized,
  }

  return <>
    <motion.div
      className={s.container}
      initial={{ opacity: 0, y: -15 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      transition={getTransition({ duration: 0.4, delay: 0.4 })}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <Flex className={cn(s.thumb, resolvedTheme === 'dark' ? s.dark : '')} align='center' justify='center'>
        <motion.div className={s.icon} initial={{ opacity: 0 }} animate={{ opacity: isDark ? 0 : 1 }} transition={getTransition()}>
          <Icon name={GlyphIcon.LIGHT_MODE} {...iconProps} />
        </motion.div>
        <motion.div className={s.icon} initial={{ opacity: 0 }} animate={{ opacity: isDark ? 1 : 0 }} transition={getTransition()}>
          <Icon name={GlyphIcon.DARK_MODE} {...iconProps} />
        </motion.div>
      </Flex>
    </motion.div>
  </>
}
