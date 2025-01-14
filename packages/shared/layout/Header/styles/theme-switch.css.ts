import { colorVars, radiusVars, getCSSTransition } from '@tapie-kr/inspire-react/lib'
import { getShorthandedValue } from '@tapie-kr/inspire-react/utils'
import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  width: 60,
  height: 38,
  background: colorVars.surface.elevated,
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.pill,
  cursor: 'pointer',
})

export const thumb = style({
  position: 'absolute',
  width: 30,
  height: 30,
  background: colorVars.surface.default,
  borderRadius: radiusVars.pill,
  top: 4,
  left: 4,
  overflow: 'hidden',
  transition: getCSSTransition('left', 0.3),
})

export const dark = style({
  left: 26,
})

export const icon = style({
  position: 'absolute',
  width: 20,
  height: 20,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})
