import { Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  maxWidth: 1400,
  padding: `100px ${Spacing.Jumbo}`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${Spacing.Giant} ${Spacing.Moderate}`,
    },
  },
})

export const title = style({
  flexDirection: 'row',
  '@media': {
    '(max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
})

export const viewMore = style({
  width: '100%',
  maxWidth: 375,
  '@media': {
    '(max-width: 1000px)': {
      maxWidth: '100%',
    },
  },
})
