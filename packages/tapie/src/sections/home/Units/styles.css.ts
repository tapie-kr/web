import { Color, Radius, Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const template = style({
  padding: `100px ${Spacing.Jumbo}`,
  background: Color.Surface.Elevated,
  '@media': {
    '(max-width: 768px)': {
      padding: `${Spacing.Giant} ${Spacing.Moderate}`,
      flexDirection: 'column',
    },
  },
})

export const invertedTemplate = style([template, {
  background: Color.Surface.Default,
}])

export const content = style({
  maxWidth: 1400,
})

export const title = style({
  flexDirection: 'row',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: Spacing.Moderate,
    },
  },
})

export const description = style({
  textAlign: 'right',
  '@media': {
    'screen and (max-width: 768px)': {
      textAlign: 'left',
    },
  },
})

export const featureCard = style({
  width: `calc(50% - ${Spacing.Base} / 2)`,
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

export const invertedFeatureCard = style([featureCard, {
  background: Color.Surface.Elevated,
}])

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
