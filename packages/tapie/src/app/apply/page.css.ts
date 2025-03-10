import {
  colorVars,
  getShorthandedValue,
  radiusVars,
  spacingVars,
  utilityClass,
} from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const container = style({ padding: getShorthandedValue(spacingVars.giant, spacingVars.base) });

export const form = style([
  utilityClass.interactive,
  {
    maxWidth:     400,
    borderRadius: radiusVars.default,
    background:   colorVars.surface.elevated,
    padding:      spacingVars.micro,
  },
]);
