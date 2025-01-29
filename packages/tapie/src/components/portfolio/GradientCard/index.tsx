import * as s from './styles.css';

import { HStack, StackAlign } from '@tapie-kr/inspire-react';
import { type ReactNode } from 'react';
import Thumbnail from '@/../public/thumbnails/artnect.webp';

type PortfolioGradientCardProps = {
  padding?: string | number;
  children?: ReactNode;
};

export default function PortfolioGradientCard(props: PortfolioGradientCardProps) {
  return (
    <HStack
      className={s.card}
      fullWidth
    >
      <img
        className={s.thumbnail}
        src={Thumbnail.src}
        alt='ArtNect'
      />
      <HStack
        className={s.content}
        align={StackAlign.END}
        style={{ padding: props.padding }}
      >
        {props.children}
      </HStack>
    </HStack>
  );
}
