import { getShorthandedValue, radiusVars, spacingVars } from '@tapie-kr/inspire-react';

import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({ padding: getShorthandedValue(spacingVars.medium, spacingVars.base) });
export const content = style({ maxWidth: 738 });
export const profileImage = style({ objectFit: 'cover' });

globalStyle(`${profileImage} img`, { borderRadius: radiusVars.full });
