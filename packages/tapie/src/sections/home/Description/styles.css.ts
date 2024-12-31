import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: `140px ${ComponentVariable.Spacing.Moderate}`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Giant} ${ComponentVariable.Spacing.Moderate}`,
    },
  },
})

export const content = style({
  width: `100%`,
  maxWidth: 988,
  '@media': {
    '(max-width: 768px)': {
      gap: ComponentVariable.Spacing.Large,
    },
  },
})

export const paragraph = style({
  lineHeight: '200%',
  '@media': {
    '(max-width: 768px)': {
      fontSize: 20,
    },
  },
})

export const clubs = style({
  columnGap: ComponentVariable.Spacing.Base,
})

export const clubIconStyle = style({
  width: 38,
  height: 38,
  '@media': {
    '(max-width: 768px)': {
      width: 24,
      height: 24,
    },
  },
})

export const stats = style({
  width: `100%`,
  maxWidth: 988,
})
