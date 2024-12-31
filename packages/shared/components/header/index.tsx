'use client'

import * as s from './styles/header.css'

import { HStack } from '@cottons-kr/react-foundation'
import { GlyphIcon, Icon, TAPIESymbol, TAPIESymbolSize, Typo, TypographyWeight } from '@tapie-kr/inspire-react'
import { useToggle } from '~/hooks/use-toggle'
import { AnimatePresence, motion } from 'framer-motion'
import { getTransition } from '~/lib/animation'
import { backdropStyle, frameStyle, menuStyle, contentStyle } from './styles/menu.css'
import Menu from './menu'

export default function Header() {
  const [showMenu, toggleMenu] = useToggle()

  return <>
    <HStack tag='header' className={s.headerStyle} align='center' justify='between'>
      <TAPIESymbol size={TAPIESymbolSize._24} withLabel />
      <button className={s.menuButtonStyle} onClick={toggleMenu}>
        <Icon name={GlyphIcon.Menu} size={18} />
        <Typo.Petite weight={TypographyWeight.Semibold}>메뉴</Typo.Petite>
      </button>
    </HStack>

    <AnimatePresence>{
      showMenu && <HeaderMenu hide={toggleMenu} />
    }</AnimatePresence>
  </>
}

type HeaderMenuProps = {
  hide: () => unknown
}

function HeaderMenu(props: HeaderMenuProps) {
  return <>
    <motion.div
      className={backdropStyle} onClick={props.hide}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    />
    <div className={frameStyle}>
      <motion.div
        data-theme='dark'
        className={menuStyle}
        initial={{ height: 0 }} animate={{ height: '100%' }} exit={{ height: 0 }}
        transition={getTransition({ duration: 0.4 })}
      >
        <div className={contentStyle}>
          <Menu hide={props.hide} />
        </div>
      </motion.div>
    </div>
  </>
}
