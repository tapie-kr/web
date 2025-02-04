import { spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const member = style({ padding: spacingVars.base });

export const carousel = style({
  position:    'relative',
  width:       '100%',
  height:      '100%',
  maxHeight:   500,
  aspectRatio: '1 / 1',
  overflow:    'hidden',
});

export const carouselItem = style({
  width:     '100%',
  height:    '100%',
  objectFit: 'cover',
});
