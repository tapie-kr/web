import {
  colorVars,
  getShorthandedValue,
  radiusVars,
  spacingVars,
} from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const container = style({
  border:       getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.smooth,
  padding:      spacingVars.petite,
});
