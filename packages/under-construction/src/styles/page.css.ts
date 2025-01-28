import { ColorVariable,ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const copyrightStyle = style({
  position: 'absolute',
  bottom: ComponentVariable.Spacing.Medium,
  left: '50%',
  transform: 'translateX(-50%)',
  color: ColorVariable.Content.Muted,
  whiteSpace: 'nowrap',
})
