import { ComponentVariable, ColorVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const copyrightStyle = style({
  position: 'absolute',
  bottom: ComponentVariable.Spacing._24,
  left: '50%',
  transform: 'translateX(-50%)',
  color: ColorVariable.Content.Muted,
})
