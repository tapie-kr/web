import {
  colorVars,
  getMobileMediaQuery,
  getShorthandedValue,
  radiusVars,
  spacingVars,
} from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const footer = style({
  padding: spacingVars.jumbo,
  background: colorVars.surface.default,
  ...getMobileMediaQuery({
    padding: getShorthandedValue(spacingVars.jumbo, spacingVars.moderate),
    flexDirection: 'column',
  }),
});

export const linkList = style({
  justifyContent: 'flex-end',
  ...getMobileMediaQuery({
    justifyContent: 'flex-start',
  }),
});

export const linkChip = style({
  padding: getShorthandedValue(spacingVars.micro, spacingVars.base),
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.pill,
});
