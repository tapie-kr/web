import { colorVars, radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const base = style({
  paddingBlock:    spacingVars.base,
  paddingInline:   spacingVars.moderate,
  backgroundColor: colorVars.surface.inverted.default,
  marginBottom:    spacingVars.medium,
  borderRadius:    radiusVars.smooth,
  '@media':        { 'screen and (max-width: 500px)': { flexDirection: 'column' } },
});

export const media = style({ '@media': { 'screen and (max-width: 500px)': { flexDirection: 'column' } } });

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

export const listContainer = style({
  paddingBlock:  spacingVars.base,
  paddingInline: spacingVars.moderate,
  gap:           spacingVars.base,
});
