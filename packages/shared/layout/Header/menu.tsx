'use client';

import * as s from './styles/menu.css';

import { HStack, VStack } from '@cottons-kr/react-foundation';
import {
  colorVars,
  GlyphIcon,
  Icon,
  spacingVars,
  Tag,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  utilityClass,
  Weight,
} from '@tapie-kr/inspire-react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeSwitch from './theme-switch';

import { getTransition } from '~/lib/animation';

type LinkListProps = {
  links: Array<{
    label: string;
    href:  string;
  }>;
  hide: () => unknown;
};

function LinkList(props: LinkListProps) {
  const headerMotionProps = {
    initial:    { opacity: 0 },
    animate:    { opacity: 1 },
    exit:       { opacity: 1 },
    transition: getTransition({
      duration: 0.4,
      delay:    0.18,
    }),
  };

  const handleCloseClick = props.hide;
  const handleLinkClick = props.hide;

  return (
    <VStack className={s.linkList}>
      <HStack
        align='center'
        justify='between'
      >
        <motion.div {...headerMotionProps}>
          <TAPIESymbol
            hasLabel
            className={utilityClass.desktopOnly}
            size={TAPIESymbolSize._20}
          />
          <TAPIESymbol
            className={utilityClass.mobileOnly}
            size={TAPIESymbolSize._32}
          />
        </motion.div>
        <motion.div
          className={utilityClass.mobileOnly}
          onClick={handleCloseClick}
          {...headerMotionProps}
        >
          <Icon
            name={GlyphIcon.CLOSE}
            color={colorVars.content.emphasized}
            size={32}
          />
        </motion.div>
      </HStack>
      {props.links.map(({ label, href }, i) => (
        <motion.div
          key={label}
          className={s.link}
          initial={{
            opacity: 0,
            y:       -20,
          }}
          animate={{
            opacity: 1,
            y:       0,
          }}
          exit={{
            opacity: 1,
            y:       0,
          }}
          transition={getTransition({
            duration: 0.4,
            delay:    i * 0.03 + 0.18,
          })}
          onClick={handleLinkClick}
        >
          <Link href={href}>
            <Typo.Medium
              tag={Tag.SPAN}
              weight={Weight.SEMIBOLD}
            >
              {label}
            </Typo.Medium>
          </Link>
        </motion.div>
      ))}
    </VStack>
  );
}

type DesktopMenuProps = {
  hide: () => unknown;
};

export default function Menu(props: DesktopMenuProps) {
  return (
    <HStack>
      <VStack gap={spacingVars.medium}>
        <LinkList
          hide={props.hide}
          links={[
            {
              label: '홈',
              href:  '/',
            },
            {
              label: '포트폴리오',
              href:  '/portfolios',
            },
            {
              label: '수상실적',
              href:  '#awards',
            },
            {
              label: 'FAQ',
              href:  '#faq',
            },
            {
              label: 'INSPIRE',
              href:  'https://inspire.tapie.kr/',
            },
          ]}
        />
        <ThemeSwitch />
      </VStack>
    </HStack>
  );
}
