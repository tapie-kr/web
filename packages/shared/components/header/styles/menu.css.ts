import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const backdropStyle = style({
  position: 'fixed',
  width: '100%',
  height: '100dvh',
  background: ColorVariable.Grayscale.Translucent._20,
  backdropFilter: 'blur(10px)',
  top: 0,
  left: 0,
  zIndex: 150,
})

export const frameStyle = style({
  position: 'fixed',
  width: '100%',
  height: 383,
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
  background: ColorVariable.Solid.Black,
  padding: `0 ${ComponentVariable.Spacing.Large}`,
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const contentStyle = style({
  width: '100%',
  maxWidth: 1200,
  height: '100%',
  padding: `${ComponentVariable.Spacing.Large} 0`,
})

export const linkStyle = style({
  color: ColorVariable.Content.Muted,
  transition: 'color 0.2s',
  ':hover': {
    color: ColorVariable.Content.Emphasized,
  },
})