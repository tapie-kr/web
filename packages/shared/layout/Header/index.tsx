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
  useMediaQuery,
} from '@tapie-kr/inspire-react';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Menu from './menu';

import { useToggle } from '~/hooks/use-toggle';
import { getTransition } from '~/lib/animation';

export default function Header() {
  const [showMenu, toggleMenu] = useToggle();
  const isMobile = useMediaQuery();
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
            hasLabel={!isMobile}
            size={isMobile ? TAPIESymbolSize._32 : TAPIESymbolSize._24}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleMenuClick}
      />
      <div className={s.frame}>
        <motion.div
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
