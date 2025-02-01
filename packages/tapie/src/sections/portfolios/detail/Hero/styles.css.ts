import { getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const introContainer = style({
  width:      '100%',
  maxWidth:   400,
  padding:    getShorthandedValue(spacingVars.moderate, spacingVars.base),
  flexShrink: 0,
});
