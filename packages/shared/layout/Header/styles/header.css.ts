import { colorVars, spacingVars, radiusVars } from '@tapie-kr/inspire-react/lib'
import { getShorthandedValue, getMobileMediaQuery } from '@tapie-kr/inspire-react/utils'
import { style } from '@vanilla-extract/css'

export const headerStyle = style({
  position: 'fixed',
  padding: `22px 30px`,
  top: 0,
  left: 0,
  background: colorVars.surface.default,
  zIndex: 100,
})

export const menuButtonStyle = style({
  width: 77,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacingVars.micro,
  background: colorVars.surface.default,
  border: getShorthandedValue('1.5px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.pill,
  ':hover': {
    background: colorVars.surface.inverted.default,
    color: colorVars.content.inverted.emphasized,
  },
})

export const backdrop = style({
  position: 'fixed',
  width: '100%',
  height: '100dvh',
  background: colorVars.solid.translucent.black._20,
  backdropFilter: 'blur(10px)',
  top: 0,
  left: 0,
  zIndex: 150,
})

export const frame = style({
  position: 'fixed',
  width: '100%',
  height: 414,
  top: 0,
  left: 0,
  zIndex: 200,
  ...getMobileMediaQuery({
    height: '100dvh',
  }),
})

export const menu = style({
  background: colorVars.surface.default,
  padding: getShorthandedValue(0, spacingVars.large),
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const content = style({
  width: '100%',
  maxWidth: 1200,
  height: '100%',
  padding: getShorthandedValue(spacingVars.large, 0),
})
