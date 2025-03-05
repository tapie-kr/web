import { radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { globalStyle, style } from '@vanilla-extract/css';

export const projectContainer = style({ borderRadius: radiusVars.default });
export const project = style({ paddingRight: spacingVars.petite });

globalStyle(`${projectContainer} > img`, { borderRadius: radiusVars.default });
