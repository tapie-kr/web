import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const backdropStyle = style({
  position: 'fixed',
  width: '100%',
  height: '100dvh',
  background: Color.Grayscale.Translucent._20,
  backdropFilter: 'blur(10px)',
  top: 0,
  left: 0,
  zIndex: 150,
})

export const frameStyle = style({
  position: 'fixed',
  width: '100%',
  height: 407,
  top: 0,
  left: 0,
  zIndex: 200,
  '@media': {
    'screen and (max-width: 768px)': {
      height: '100dvh',
    },
  },
})

export const menuStyle = style({
  background: Color.Solid.Black,
  padding: `0 ${Spacing.Large}`,
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const contentStyle = style({
  width: '100%',
  maxWidth: 1200,
  height: '100%',
  padding: `${Spacing.Large} 0`,
})

export const linkStyle = style({
  color: Color.Content.Muted,
  ':hover': {
    color: Color.Content.Emphasized,
  },
})