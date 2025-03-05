import {
  colorVars,
  getMobileMediaQuery,
  getResponsiveQuery,
  getShorthandedValue,
  radiusVars,
  spacingVars,
} from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const thumbnail = style({
  width:        200,
  borderRadius: radiusVars.full,
  ...getMobileMediaQuery({ width: 160 }),
});

export const right = style({
  padding: getShorthandedValue(0, spacingVars.moderate),
  color:   colorVars.content.default,
  ...getResponsiveQuery(1000, { display: 'none' }),
});

export const winnerBadge = style({
  position: 'absolute',
  top:      spacingVars.tiny,
  left:     spacingVars.tiny,
  zIndex:   1,
});
