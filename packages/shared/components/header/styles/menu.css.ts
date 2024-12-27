import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const backdropStyle = style({
  position: 'fixed',
  width: '100%',
  height: '100dvh',
  background: ColorVariable.Solid.Translucent.Black._20,
  backdropFilter: 'blur(4px)',
  top: 0,
  left: 0,
  zIndex: 2,
})

export const frameStyle = style({
  position: 'fixed',
  width: '100%',
  height: 363,
  top: 0,
  left: 0,
  zIndex: 3,
  '@media': {
    'screen and (max-width: 768px)': {
      height: '100dvh',
    },
  },
})

export const menuStyle = style({
  background: ColorVariable.Solid.Black,
  padding: `0 ${ComponentVariable.Spacing._40}`,
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const contentStyle = style({
  width: '100%',
  maxWidth: 1200,
  height: '100%',
  padding: `${ComponentVariable.Spacing._40} 0`,
})

export const linkStyle = style({
  color: ColorVariable.Content.Muted,
  transition: 'color 0.2s',
  ':hover': {
    color: ColorVariable.Content.Emphasized,
  },
})