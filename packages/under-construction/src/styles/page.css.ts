import { ComponentVariable, ColorVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const copyrightStyle = style({
  position: 'absolute',
  bottom: ComponentVariable.Spacing._24,
  color: ColorVariable.Content.Muted,
})
