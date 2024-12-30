import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const sectionStyle = style({
  padding: `140px ${ComponentVariable.Spacing.Moderate}`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Giant} ${ComponentVariable.Spacing.Moderate}`,
    },
  },
})

export const contentStyle = style({
  width: `100%`,
  maxWidth: 988,
  '@media': {
    '(max-width: 768px)': {
      gap: ComponentVariable.Spacing.Large,
    },
  },
})

export const paragraphStyle = style({
  lineHeight: '200%',
})

export const clubsStyle = style({
  columnGap: ComponentVariable.Spacing.Base,
})

export const statsStyle = style({
  width: `100%`,
  maxWidth: 988,
})
