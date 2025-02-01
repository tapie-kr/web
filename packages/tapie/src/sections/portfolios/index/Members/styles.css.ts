import { colorVars, getResponsiveQuery, radiusVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const profileImage = style({
  width:        80,
  height:       80,
  background:   colorVars.surface.raised,
  borderRadius: radiusVars.full,
  ...getResponsiveQuery(600, {
    width:  70,
    height: 70,
  }),
});
