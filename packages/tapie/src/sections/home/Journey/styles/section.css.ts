import {
  getMobileMediaQuery,
  getResponsiveQuery,
  getShorthandedValue,
  spacingVars,
} from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const section = style({
  padding: getShorthandedValue('100px', 0),
  ...getMobileMediaQuery({ padding: getShorthandedValue(spacingVars.giant, 0) }),
});

export const title = style({
  maxWidth:      1400,
  padding:       getShorthandedValue('0', spacingVars.moderate),
  flexDirection: 'row',
  overflow:      'hidden',
  ...getResponsiveQuery(1000, { flexDirection: 'column' }),
});

export const viewMore = style({
  width:      '100%',
  maxWidth:   375,
  textAlign:  'right',
  alignItems: 'end',
  overflow:   'hidden',
  ...getResponsiveQuery(1000, {
    maxWidth:   '100%',
    textAlign:  'left',
    alignItems: 'start',
  }),
});

export const marqueeGroup = style({ padding: getShorthandedValue(spacingVars.moderate, 0) });
