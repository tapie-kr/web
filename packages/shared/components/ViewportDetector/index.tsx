'use client';

import { useInView } from 'framer-motion';
import { type ReactNode, type RefObject, useRef } from 'react';
import { ViewportDetectorContext } from './context';

type ViewportDetectorProps = {
  shouldOnce?: boolean;
  ref?:        RefObject<HTMLElement>;
  children?:   ReactNode;
};

export default function ViewportDetector(props: ViewportDetectorProps) {
  const containerRef = useRef<HTMLElement>(null);

  const isInView = useInView(props.ref ?? containerRef, {
    amount: 0.07,
    once:   props.shouldOnce,
  });

  return (
    <ViewportDetectorContext.Provider value={{ isInView }}>
      <section ref={containerRef}>{props.children}</section>
    </ViewportDetectorContext.Provider>
  );
}
