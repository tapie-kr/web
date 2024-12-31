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

export const backdrop = style({
  position: 'fixed',
  width: '100%',
  height: '100dvh',
  background: Color.Grayscale.Translucent._20,
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
  '@media': {
    'screen and (max-width: 768px)': {
      height: '100dvh',
    },
  },
})

export const menu = style({
  background: Color.Solid.Black,
  padding: `0 ${Spacing.Large}`,
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const content = style({
  width: '100%',
  maxWidth: 1200,
  height: '100%',
  padding: `${Spacing.Large} 0`,
})
