'use client'

import { headerStyle, menuButtonStyle } from './styles/header.css'

import { HStack } from '@cottons-kr/react-foundation'
import { GlyphIcon, Icon, TAPIESymbol, TAPIESymbolSize, Typo, TypographyWeight } from '@tapie-kr/inspire-react'
import { useToggle } from '~/hooks/use-toggle'
import { AnimatePresence } from 'framer-motion'
import HeaderMenu from './menu'

export default function Header() {
  const [showMenu, toggleMenu] = useToggle()

  return <>
    <HStack tag='header' className={headerStyle} justify='between'>
      <TAPIESymbol size={TAPIESymbolSize._24} withLabel />
      <button className={menuButtonStyle} onClick={toggleMenu}>
        <Icon name={GlyphIcon.Menu} size={18} />
        <Typo.Callout weight={TypographyWeight.Semibold}>메뉴</Typo.Callout>
      </button>
    </HStack>

    <AnimatePresence>{
      showMenu && <HeaderMenu hide={toggleMenu} />
    }</AnimatePresence>
  </>
}
