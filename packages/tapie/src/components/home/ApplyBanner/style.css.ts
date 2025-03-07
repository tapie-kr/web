import { colorVars, radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  height:          95,
  paddingBlock:    spacingVars.base,
  backgroundColor: colorVars.surface.inverted.default,
  marginBottom:    spacingVars.medium,
});

export const applyDateBox = style({
  paddingBlock:    spacingVars.optical,
  paddingInline:   spacingVars.tiny,
  borderRadius:    radiusVars.subtle,
  backgroundColor: colorVars.surface.inverted.raised,
});

export const symbolBase = style({
  display:      'flex',
  alignContent: 'center',
});
