'use client';

import { VStack } from '@cottons-kr/react-foundation';

import { colorVars, spacingVars, Tag, Typo, Weight } from '@tapie-kr/inspire-react';
import Animate from '@tapie-kr/web-shared/components/Animate';
import { ViewportDetectorContext } from '@tapie-kr/web-shared/components/ViewportDetector/context';
import { animate as animateValue, motion, useMotionValue, useTransform } from 'framer-motion';
import { useContext, useEffect } from 'react';

type StatsCardProps = {
  order: number;
  label: string;
  value: number;
  unit: string;
};

export default function HomeDescriptionSectionStatsCard(props: StatsCardProps) {
  const { isInView } = useContext(ViewportDetectorContext);
  const rawValue = useMotionValue(0);
  const value = useTransform(rawValue, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animateValue(rawValue, props.value, {
        duration: 3,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, props.value, rawValue]);

  return (
    <>
      <Animate order={props.order}>
        <VStack
          fitContent
          gap={spacingVars.tiny}
        >
          <Typo.Moderate
            weight={Weight.SEMIBOLD}
            tag={Tag.P}
            color={colorVars.content.muted}
            nowrap
          >
            {props.label}
          </Typo.Moderate>
          <Typo.Medium
            weight={Weight.MEDIUM}
            tag={Tag.SPAN}
            nowrap
          >
            <motion.span>{value}</motion.span>
            {props.unit}
          </Typo.Medium>
        </VStack>
      </Animate>
    </>
  );
}
