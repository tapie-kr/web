'use client';

import * as s from './styles.css';

import { HStack } from '@cottons-kr/react-foundation';
import { spacingVars, Tag } from '@tapie-kr/inspire-react';

import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context';
import { getTransition } from '@tapie-kr/web-shared/lib/animation';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ParagraphText } from '.';

type ClubProps = {
  order: number;
  icon:  SVGComponent;
  name:  string;
};

export default function HomeDescriptionSectionClub(props: ClubProps) {
  const { isInView } = useContext(ViewportDetectorContext);

  const transition = getTransition({
    duration: 0.5,
    delay:    props.order * 0.12 + 0.4,
  });

  const resetTransition = getTransition({ duration: 0 });

  const initial = {
    x:          -30,
    opacity:    0,
    transition: resetTransition,
  };

  const animate = isInView
    ? {
      x:       0,
      opacity: 1,
    }
    : initial;

  return (
    <HStack
      fitContent
      tag={Tag.SPAN}
      align='center'
      gap={spacingVars.micro}
    >
      <motion.span
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <props.icon
          aria-hidden
          className={s.clubIconStyle}
        />
      </motion.span>
      <ParagraphText>{props.name}</ParagraphText>
    </HStack>
  );
}
