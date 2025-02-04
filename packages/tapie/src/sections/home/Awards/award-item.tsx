'use client';

import * as s from './styles.css';

import { colorVars, Typo, Weight } from '@tapie-kr/inspire-react';

import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context';
import { getTransition } from '@tapie-kr/web-shared/lib/animation';
import { motion } from 'framer-motion';
import { useContext } from 'react';

type AwardItemProps = {
  order: number;
  name:  string;
  label: string;
};

export default function HomeAwardsSectionAwardItem(props: AwardItemProps) {
  const { isInView } = useContext(ViewportDetectorContext);

  const transition = getTransition({
    duration: 0.85,
    delay:    (props.order * 0.03) + 0.55,
  });

  const resetTransition = getTransition({ duration: 0 });

  const initial = {
    y:          20,
    opacity:    0,
    scale:      0.98,
    transition: resetTransition,
  };

  const animate = isInView
    ? {
      y:       0,
      opacity: 1,
      scale:   1,
    }
    : initial;

  return (
    <motion.div
      className={s.awardItem}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <Typo.Base weight={Weight.MEDIUM}>{props.label}</Typo.Base>
      <Typo.Petite
        color={colorVars.content.muted}
        weight={Weight.SEMIBOLD}
      >
        {props.name}
      </Typo.Petite>
    </motion.div>
  );
}
