import { Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: `140px ${Spacing.Moderate}`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${Spacing.Giant} ${Spacing.Moderate}`,
    },
  },
})

export const content = style({
  width: `100%`,
  maxWidth: 1000,
  '@media': {
    '(max-width: 768px)': {
      gap: Spacing.Large,
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
  columnGap: Spacing.Base,
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
