import { spacingVars, utilityClass } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width:    '100%',
});

export const hide = style({ display: 'none' });

export const button = style([
  utilityClass.desktopOnly,
  {
    position:  'absolute',
    top:       '50%',
    transform: 'translateY(-50%)',
    zIndex:    1,
  },
]);

export const leftButton = style([button, { left: spacingVars.mini }]);
export const rightButton = style([button, { right: spacingVars.mini }]);
