'use client';

import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context';
import { getTransition } from '@tapie-kr/web-shared/lib/animation';
import { motion } from 'framer-motion';
import { createContext, type Dispatch, type SetStateAction, useContext } from 'react';

type HomeAwardsSectionContextValue = {
  selectedYear:    number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
};

type AnimateProps = {
  order:      number;
  className?: string;
  children?:  Children;
};

export const HomeAwardsSectionContext = createContext({} as HomeAwardsSectionContextValue);

export function Animate(props: AnimateProps) {
  const { isInView } = useContext(ViewportDetectorContext);

  const transition = getTransition({
    duration: 0.65,
    delay:    (props.order * 0.2) + 0.2,
  });

  const resetTransition = getTransition({ duration: 0 });

  const animate = isInView
    ? {
      y: 0,
      transition,
    }
    : {
      y:          '100%',
      transition: resetTransition,
    };

  return (
    <motion.div
      className={props.className}
      initial={{ y: '100%' }}
      animate={animate}
    >
      {props.children}
    </motion.div>
  );
}
