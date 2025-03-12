import { colorVars } from '@tapie-kr/inspire-react';

import { keyframes, style } from '@vanilla-extract/css';

const rotate = keyframes({
  '0%':   { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const loading = keyframes({
  '0%': {
    opacity: 0.7, scale: 0.95,
  },
  '100%': {
    opacity: 1, scale: 1,
  },
});

export const loadingBase = style({
  width:    '100vw',
  height:   '100vh',
  position: 'absolute',
  top:      0,
  left:     0,

  backgroundColor: colorVars.surface.default,
});

export const loadingContentBase = style({ animation: `${loading} 1.5s ease-in-out infinite alternate` });
export const rotatingIcon = style({ animation: `${rotate} 2s linear infinite` });

export const notFoundBase = style({
  position: 'absolute', top: 0, left: 0, height: '100vh', backgroundColor: colorVars.surface.default,
});
