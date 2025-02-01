import { colorVars, getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const thumbnail = style({ width: 200 });

export const right = style({
  padding: getShorthandedValue(0, spacingVars.moderate),
  color:   colorVars.content.default,
});
