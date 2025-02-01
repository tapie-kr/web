import {
  colorVars,
  getMobileMediaQuery,
  getShorthandedValue,
  radiusVars,
  spacingVars,
} from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const section = style({
  maxWidth: 1400,
  padding:  getShorthandedValue(spacingVars.giant, spacingVars.moderate),
  ...getMobileMediaQuery({
    flexDirection: 'column',
    gap:           spacingVars.large,
  }),
});

export const maxWidth = style({
  maxWidth: 650,
  ...getMobileMediaQuery({ maxWidth: '100%' }),
});

export const dropdown = style([
  maxWidth,
  {
    width:        '100%',
    padding:      20,
    background:   colorVars.surface.elevated,
    border:       getShorthandedValue('1px', 'solid', colorVars.line.border),
    borderRadius: radiusVars.default,
    cursor:       'pointer',
  },
]);

export const content = style({ overflow: 'hidden' });

export const rotatedIcon = style({ transform: 'rotate(180deg)' });
