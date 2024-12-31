import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  maxWidth: 1400,
  padding: `100px ${ComponentVariable.Spacing.Jumbo}`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Giant} ${ComponentVariable.Spacing.Moderate}`,
      flexDirection: 'column',
    },
  },
})

export const dropdown = style({
  width: '100%',
  maxWidth: 650,
  padding: `${ComponentVariable.Spacing.Base} ${ComponentVariable.Spacing.Moderate}`,
  background: ColorVariable.Surface.Elevated,
  border: `1px solid ${ColorVariable.Line.Border}`,
  borderRadius: ComponentVariable.Radius.Default,
  cursor: 'pointer',
  '@media': {
    '(max-width: 768px)': {
      maxWidth: '100%',
    },
  },
})

export const contentStyle = style({
  overflow: 'hidden',
})

export const icon = style({
  transition: 'transform 0.2s',
})

export const rotatedIcon = style({
  transform: 'rotate(180deg)',
})
