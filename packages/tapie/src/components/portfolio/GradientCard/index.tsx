import * as s from './styles.css';

import { HStack, StackAlign } from '@tapie-kr/inspire-react';

import cn from 'classnames';
import { type ReactNode } from 'react';

type PortfolioGradientCardProps = {
  height?:      string | number;
  padding?:     string | number;
  className?:   string;
  children?:    ReactNode;
  thumbnailUri: string;
};

export default function PortfolioGradientCard(props: PortfolioGradientCardProps) {
  const {
    height = 250,
    padding = '1rem',
    className,
    children,
    thumbnailUri,
  } = props;

  return (
    <HStack
      fullWidth
      className={cn(s.card, className)}
      style={{ height }}
    >
      <img
        className={s.thumbnail}
        src={thumbnailUri}
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
