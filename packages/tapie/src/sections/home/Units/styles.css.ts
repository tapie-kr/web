import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const template = style({
  padding: `100px ${ComponentVariable.Spacing.Jumbo}`,
  background: ColorVariable.Surface.Elevated,
  '@media': {
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Giant} ${ComponentVariable.Spacing.Moderate}`,
      flexDirection: 'column',
    },
  },
})

export const invertedTemplate = style([template, {
  background: ColorVariable.Surface.Default,
}])

export const content = style({
  maxWidth: 1400,
})

export const title = style({
  flexDirection: 'row',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: ComponentVariable.Spacing.Moderate,
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
  width: `calc(50% - ${ComponentVariable.Spacing.Base} / 2)`,
  padding: ComponentVariable.Spacing.Medium,
  background: ColorVariable.Surface.Default,
  border: `1px solid ${ColorVariable.Line.Border}`,
  borderRadius: ComponentVariable.Radius.Smooth,
  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const invertedFeatureCard = style([featureCard, {
  background: ColorVariable.Surface.Elevated,
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
