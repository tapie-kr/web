import { colorVars, radiusVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const marquee = style({
  position: 'relative',
  height: 200,
  overflow: 'hidden',
  '@media': {
    '(max-width: 768px)': {
      height: 95,
    },
  },
});

export const card = style({
  position: 'absolute',
  width: 370,
  height: 200,
  background: colorVars.surface.elevated,
  borderRadius: radiusVars.smooth,
  flexShrink: 0,
  overflow: 'hidden',
  '@media': {
    '(max-width: 768px)': {
      width: 176,
      height: 95,
    },
  },
});

export const thumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
