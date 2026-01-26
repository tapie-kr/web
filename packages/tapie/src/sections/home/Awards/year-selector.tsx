'use client';

import { yearItem, yearItemActive, yearSelector } from './styles.css';

import { HStack } from '@cottons-kr/react-foundation';
import { spacingVars, Typo, Weight } from '@tapie-kr/inspire-react';

import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context';
import { getTransition } from '@tapie-kr/web-shared/lib/animation';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useContext, useMemo } from 'react';
import awards from '@/../public/_awards.json';
import { HomeAwardsSectionContext } from './shared';

export default function HomeAwardsSectionYearSelector() {
  return (
    <HStack
      wrap
      className={yearSelector}
      gap={spacingVars.petite}
    >
      {Object.keys(awards).toReversed()
        .map(year => (
          <YearItem
            key={year}
            year={Number(year)}
          />
        ))}
    </HStack>
  );
}

type YearSelectorItemProps = {
  year: number;
};

function YearItem(props: YearSelectorItemProps) {
  const { isInView } = useContext(ViewportDetectorContext);
  const { selectedYear, setSelectedYear } = useContext(HomeAwardsSectionContext);

  const isSelected = useMemo(() => selectedYear === props.year,
    [selectedYear, props.year]);

  const transition = getTransition({
    duration: 0.65,
    delay:    ((2025 - props.year) * 0.05) + 0.4,
  });

  const resetTransition = getTransition({ duration: 0 });

  const animate = isInView
    ? {
      x:       0,
      opacity: 1,
      transition,
    }
    : {
      x:          25,
      opacity:    0,
      transition: resetTransition,
    };

  return (
    <motion.button
      className={cn(yearItem, isSelected && yearItemActive)}
      animate={animate}
      initial={{
        x:       15,
        opacity: 0,
      }}
      onClick={() => setSelectedYear(props.year)}
    >
      <Typo.Base weight={Weight.SEMIBOLD}>{props.year}</Typo.Base>
    </motion.button>
  );
}
