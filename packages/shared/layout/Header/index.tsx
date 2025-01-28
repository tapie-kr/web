'use client';

import * as s from './styles/header.css';

import { HStack } from '@cottons-kr/react-foundation';

import {
  GlyphIcon,
  Icon,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  TypographyWeight,
} from '@tapie-kr/inspire-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Menu from './menu';

import { useToggle } from '~/hooks/use-toggle';
import { getTransition } from '~/lib/animation';

export default function Header() {
  const [showMenu, toggleMenu] = useToggle();

  const handleMenuButtonClick = toggleMenu;

  return (
    <>
      <HStack
        tag='header'
        className={s.headerStyle}
        align='center'
        justify='between'
      >
        <Link href='/'>
          <TAPIESymbol
            size={TAPIESymbolSize._24}
            hasLabel
          />
        </Link>
        <button
          className={s.menuButtonStyle}
          onClick={handleMenuButtonClick}
        >
          <Icon
            name={GlyphIcon.MENU}
            size={18}
          />
          <Typo.Petite weight={TypographyWeight.SEMIBOLD}>메뉴</Typo.Petite>
        </button>
      </HStack>

      <AnimatePresence>{showMenu && <HeaderMenu hide={toggleMenu} />}</AnimatePresence>
    </>
  );
}

type HeaderMenuProps = {
  hide: () => unknown;
};

function HeaderMenu(props: HeaderMenuProps) {
  const handleMenuClick = props.hide;

  return (
    <>
      <motion.div
        className={s.backdrop}
        onClick={handleMenuClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <div className={s.frame}>
        <motion.div
          data-theme='dark'
          className={s.menu}
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          exit={{ height: 0 }}
          transition={getTransition({ duration: 0.5 })}
        >
          <div className={s.content}>
            <Menu hide={props.hide} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
