import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const sectionStyle = style({
  padding: `100px 0`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Giant} 0`,
    },
  },
})

export const titleStyle = style({
  padding: `0 ${ComponentVariable.Spacing.Jumbo}`,
  flexDirection: 'row',
  '@media': {
    '(max-width: 768px)': {
      padding: `0 ${ComponentVariable.Spacing.Moderate}`,
      flexDirection: 'column',
    },
  },
})

export const viewMoreStyle = style({
  width: 412,
  flexDirection: 'column',
})

