import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const sectionStyle = style({
  maxWidth: 1400,
  padding: `100px ${ComponentVariable.Spacing.Jumbo}`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Giant} ${ComponentVariable.Spacing.Moderate}`,
    },
  },
})

export const titleStyle = style({
  flexDirection: 'row',
  '@media': {
    '(max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
})

export const viewMoreStyle = style({
  width: '100%',
  maxWidth: 375,
  '@media': {
    '(max-width: 1000px)': {
      maxWidth: '100%',
    },
  },
})
