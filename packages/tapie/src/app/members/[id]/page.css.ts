import { getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const container = style({ padding: getShorthandedValue(spacingVars.medium, spacingVars.base) });
export const content = style({ maxWidth: 738 });
