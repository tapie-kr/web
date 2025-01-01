import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const footer = style({
  padding: ComponentVariable.Spacing.Jumbo,
  background: ColorVariable.Surface.Default,
  '@media': {
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Jumbo} ${ComponentVariable.Spacing.Moderate}`,
      flexDirection: 'column',
    },
  },
})

export const linkList = style({
  justifyContent: 'flex-end',
  '@media': {
    '(max-width: 768px)': {
      justifyContent: 'flex-start',
    },
  },
})

export const linkChip = style({
  padding: `${ComponentVariable.Spacing.Micro} ${ComponentVariable.Spacing.Base}`,
  border: `1px solid ${ColorVariable.Line.Border}`,
  borderRadius: ComponentVariable.Radius.Pill,
})