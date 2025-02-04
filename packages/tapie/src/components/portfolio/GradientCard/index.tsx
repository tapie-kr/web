import * as s from './styles.css';

import { HStack, StackAlign } from '@tapie-kr/inspire-react';

import cn from 'classnames';
import { type ReactNode } from 'react';
import Thumbnail from '@/../public/thumbnails/artnect.webp';

type PortfolioGradientCardProps = {
  height?:    string | number;
  padding?:   string | number;
  className?: string;
  children?:  ReactNode;
};

export default function PortfolioGradientCard(props: PortfolioGradientCardProps) {
  const {
    height = 250, padding = '1rem', className, children,
  } = props;

  return (
    <HStack
      fullWidth
      className={cn(s.card, className)}
      style={{ height }}
    >
      <img
        className={s.thumbnail}
        src={Thumbnail.src}
        alt='ArtNect'
      />
      <HStack
        className={s.content}
        align={StackAlign.END}
        style={{ padding }}
      >
        {children}
      </HStack>
    </HStack>
  );
}
