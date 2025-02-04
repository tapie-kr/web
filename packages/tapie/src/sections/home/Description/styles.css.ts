import { getMobileMediaQuery, getShorthandedValue, spacingVars } from '@tapie-kr/inspire-react';

import { style } from '@vanilla-extract/css';

export const section = style({
  padding: getShorthandedValue('140px', spacingVars.moderate),
  ...getMobileMediaQuery({ padding: getShorthandedValue(spacingVars.giant, spacingVars.moderate) }),
});

export const content = style({
  width:    '100%',
  maxWidth: 1000,
  ...getMobileMediaQuery({ gap: spacingVars.large }),
});

export const paragraph = style({
  lineHeight: '200%',
  ...getMobileMediaQuery({ fontSize: 20 }),
});

export const clubs = style({ columnGap: spacingVars.base });

export const clubIconStyle = style({
  width:  38,
  height: 38,
  ...getMobileMediaQuery({
    width:  24,
    height: 24,
  }),
});

export const stats = style({
  width:    '100%',
  maxWidth: 988,
});
