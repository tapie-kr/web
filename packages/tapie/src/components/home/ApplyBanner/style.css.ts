import { colorVars, radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  paddingBlock:    spacingVars.base,
  backgroundColor: colorVars.surface.inverted.default,
});

export const applyDateBox = style({
  paddingBlock:    spacingVars.optical,
  paddingInline:   spacingVars.tiny,
  borderRadius:    radiusVars.subtle,
  backgroundColor: colorVars.surface.inverted.raised,
});
