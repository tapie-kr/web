import { colorVars, getCSSTransition, radiusVars, spacingVars } from '@tapie-kr/inspire-react';
import { style } from '@vanilla-extract/css';

export const card = style({
  borderRadius: radiusVars.default,
  overflow: 'hidden',
  cursor: 'pointer',
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  padding: spacingVars.base,
  background: colorVars.solid.translucent.black._50,
  zIndex: 1,
  opacity: 0,
  transition: getCSSTransition('opacity', 0.2),
  selectors: {
    [`${card}:hover &`]: {
      opacity: 1,
    },
  },
});
