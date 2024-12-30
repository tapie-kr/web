import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const headerStyle = style({
  padding: `22px 30px`,
})

export const menuButtonStyle = style({
  width: 77,
  height: 32,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: ComponentVariable.Spacing.Micro,
  background: ColorVariable.Surface.Default,
  border: `1.5px solid ${ColorVariable.Grayscale.Solid._90}`,
  borderRadius: ComponentVariable.Radius.Pill,
  transition: 'background 0.2s, color 0.2s',
  ':hover': {
    background: ColorVariable.Surface.Inverted.Default,
    color: ColorVariable.Content.Inverted.Emphasized,
  },
})
