import { colorVars, getMobileMediaQuery, getResponsiveQuery, getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const thumbnail = style({
  width: 200,
  ...getMobileMediaQuery({ width: 160 }),
});

export const right = style({
  padding: getShorthandedValue(0, spacingVars.moderate),
  color:   colorVars.content.default,
  ...getResponsiveQuery(1000, { display: 'none' }),
});
