import { Color, Spacing, Radius } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const headerStyle = style({
  position: 'fixed',
  padding: `22px 30px`,
  top: 0,
  left: 0,
  background: Color.Surface.Default,
  zIndex: 100,
})

export const menuButtonStyle = style({
  width: 77,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: Spacing.Micro,
  background: Color.Surface.Default,
  border: `1.5px solid ${Color.Grayscale.Solid._90}`,
  borderRadius: Radius.Pill,
  ':hover': {
    background: Color.Surface.Inverted.Default,
    color: Color.Content.Inverted.Emphasized,
  },
})
