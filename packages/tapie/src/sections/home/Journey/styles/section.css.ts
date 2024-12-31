import { Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: `100px 0`,
  '@media': {
    '(max-width: 768px)': {
      padding: `${Spacing.Giant} 0`,
    },
  },
})

export const title = style({
  maxWidth: 1400,
  padding: `0 ${Spacing.Jumbo}`,
  flexDirection: 'row',
  '@media': {
    '(max-width: 1000px)': {
      padding: `0 ${Spacing.Moderate}`,
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

export const marqueeGroup = style({
  padding: `${Spacing.Moderate} 0`,
})
