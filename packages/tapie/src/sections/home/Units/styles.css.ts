import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const templateStyle = style({
  padding: `${ComponentVariable.Spacing.Giant} ${ComponentVariable.Spacing.Moderate}`,
  background: ColorVariable.Surface.Elevated,
})

export const invertedTemplateStyle = style([templateStyle, {
  background: ColorVariable.Surface.Default,
}])

export const contentStyle = style({
  maxWidth: 1400,
})

export const titleStyle = style({
  flexDirection: 'row',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: ComponentVariable.Spacing.Moderate,
    },
  },
})

export const featureCardStyle = style({
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

export const invertedFeatureCardStyle = style([featureCardStyle, {
  background: ColorVariable.Surface.Elevated,
}])

export const featureCardIconStyle = style({
  width: 60,
  height: 60,
  '@media': {
    'screen and (max-width: 768px)': {
      width: 40,
      height: 40,
    },
  },
})
