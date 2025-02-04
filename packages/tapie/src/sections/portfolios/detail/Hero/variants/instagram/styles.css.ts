import { getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const member = style({ padding: spacingVars.base });

export const content = style({ padding: getShorthandedValue(spacingVars.moderate, spacingVars.base) });

export const carousel = style({
  position:  'relative',
  width:     '100%',
  maxHeight: 346,
  overflow:  'hidden',
});

export const carouselItem = style({
  maxHeight: 346,
  objectFit: 'cover',
});
