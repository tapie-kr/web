'use client';

import * as s from './styles/theme-switch.css';

import { Flex } from '@cottons-kr/react-foundation';

import { colorVars, GlyphIcon, Icon } from '@tapie-kr/inspire-react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';

import { getTransition } from '~/lib/animation';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme]);

  const handleThemeChange = () => setTheme(isDark ? 'light' : 'dark');

  const iconProps = {
    size:  20,
    color: colorVars.content.emphasized,
  };

  return (
    <motion.div
      className={s.container}
      exit={{ opacity: 0 }}
      initial={{
        opacity: 0,
        y:       -15,
      }}
      animate={{
        scale:   1,
        opacity: 1,
        y:       0,
      }}
      transition={getTransition({
        duration: 0.4,
        delay:    0.4,
      })}
      onClick={handleThemeChange}
    >
      <Flex
        className={cn(s.thumb, resolvedTheme === 'dark' ? s.dark : '')}
        align='center'
        justify='center'
      >
        <motion.div
          className={s.icon}
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={getTransition()}
        >
          <Icon
            name={GlyphIcon.LIGHT_MODE}
            {...iconProps}
          />
        </motion.div>
        <motion.div
          className={s.icon}
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={getTransition()}
        >
          <Icon
            name={GlyphIcon.DARK_MODE}
            {...iconProps}
          />
        </motion.div>
      </Flex>
    </motion.div>
  );
}
