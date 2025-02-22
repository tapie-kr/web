import { colorVars, getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  height:  '100dvh',
  padding: getShorthandedValue(0, spacingVars.base),
});

export const content = style({ maxWidth: 300 });
export const link = style({ width: '100%' });

export const copyright = style({
  position:  'absolute',
  padding:   getShorthandedValue(0, spacingVars.base),
  color:     colorVars.content.muted,
  bottom:    24,
  textAlign: 'center',
});
