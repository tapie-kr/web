import { radiusVars } from '@tapie-kr/inspire-react';

import { globalStyle, style } from '@vanilla-extract/css';

export const member = style({});

export const image = style({
  objectFit: 'cover', borderRadius: radiusVars.full,
});

globalStyle(`${image} > img`, { borderRadius: radiusVars.full });
