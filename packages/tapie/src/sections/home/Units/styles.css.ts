import { Color, Radius, Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: `${Spacing.Giant} 0`,
  background: Color.Surface.Elevated,
})

export const title = style({
  maxWidth: 1400,
  padding: `0 ${Spacing.Moderate}`
})

export const content = style({
  maxWidth: 1400,
  padding: `0 ${Spacing.Moderate}`,
  gap: Spacing.Moderate,
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: Spacing.Giant,
    },
  },
})

export const list = style({
  maxWidth: 624,
  '@media': {
    'screen and (max-width: 768px)': {
      maxWidth: '100%',
    },
  },
})

export const featureCard = style({
  padding: Spacing.Medium,
  background: Color.Surface.Default,
  border: `1px solid ${Color.Line.Border}`,
  borderRadius: Radius.Smooth,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const featureCardIcon = style({
  width: 60,
  height: 60,
  '@media': {
    'screen and (max-width: 768px)': {
      width: 40,
      height: 40,
    },
  },
})
