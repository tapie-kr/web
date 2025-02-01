'use client';

import * as s from './styles.css';

import { utilityClass } from '@tapie-kr/inspire-react';

import cn from 'classnames';

import { motion } from 'framer-motion';

import { type HTMLAttributes, type ReactNode, useContext } from 'react';

import { AnimateContext } from './shared';

import { getTransition } from '~/lib/animation';

type AnimateProps = HTMLAttributes<HTMLSpanElement> & {
  order?:     number;
  fullWidth?: boolean;
  children?:  ReactNode;
};

export default function Animate(props: AnimateProps) {
  const { order, fullWidth, className, children, ...restProps } = props;

  const { initial, animate, duration, initialDelay, delayGap, hideOverflow } =
    useContext(AnimateContext);

  const transition = getTransition({
    duration,
    delay: (initialDelay || 0) + ((order || 0) * (delayGap || 0)),
  });

  const classNames = [
    s.animate,
    fullWidth && s.fullWidth,
    hideOverflow && utilityClass.hideOverflow,
    className,
  ];

  return (
    <span
      className={cn(classNames)}
      {...restProps}
    >
      <motion.span
        className={cn(s.animate, fullWidth && s.fullWidth)}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.span>
    </span>
  );
}
