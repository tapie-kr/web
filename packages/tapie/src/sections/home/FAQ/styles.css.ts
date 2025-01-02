import { Color, Radius, Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  maxWidth: 1400,
  padding: `${Spacing.Giant} ${Spacing.Moderate}`,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
    },
  },
})

export const dropdown = style({
  width: '100%',
  maxWidth: 650,
  padding: `${Spacing.Base} ${Spacing.Moderate}`,
  background: Color.Surface.Elevated,
  border: `1px solid ${Color.Line.Border}`,
  borderRadius: Radius.Default,
  cursor: 'pointer',
  '@media': {
    '(max-width: 768px)': {
      maxWidth: '100%',
    },
  },
})

export const content = style({
  overflow: 'hidden',
})

export const icon = style({
  transition: 'transform 0.2s',
})

export const rotatedIcon = style({
  transform: 'rotate(180deg)',
})
