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
  padding: `0 ${Spacing.Moderate}`,
  flexDirection: 'row',
  overflow: 'hidden',
  '@media': {
    '(max-width: 1000px)': {
      flexDirection: 'column',
    },
  },
})

export const viewMore = style({
  width: '100%',
  maxWidth: 375,
  textAlign: 'right',
  alignItems: 'end',
  overflow: 'hidden',
  '@media': {
    '(max-width: 1000px)': {
      maxWidth: '100%',
      textAlign: 'left',
      alignItems: 'start',
    },
  },
})

export const marqueeGroup = style({
  padding: `${Spacing.Moderate} 0`,
})
