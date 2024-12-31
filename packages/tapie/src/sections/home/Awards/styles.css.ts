import { Color, Radius, Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const section = style({
  maxWidth: 1400,
  padding: `100px ${Spacing.Jumbo}`,
  '@media': {
    '(max-width: 1000px)': {
      flexDirection: 'column',
    },
    '(max-width: 768px)': {
      padding: `${Spacing.Giant} ${Spacing.Moderate}`,
    },
  },
})

export const count = style({
  '@media': {
    '(max-width: 1000px)': {
      display: 'none',
    },
  },
})

export const yearSelector = style({
  maxWidth: 800,
  padding: `${Spacing.Micro} 0`,
  '@media': {
    '(max-width: 1000px)': {
      maxWidth: '100%',
    },
  },
})

export const yearItem = style({
  padding: `${Spacing.Micro} ${Spacing.Moderate}`,
  background: Color.Surface.Elevated,
  borderRadius: Radius.Smooth,
})

export const yearItemActive = style({
  background: Color.Surface.Inverted.Elevated,
  color: Color.Content.Inverted.Emphasized,
})

export const awardList = style({
  maxWidth: 800,
  '@media': {
    '(max-width: 1000px)': {
      maxWidth: '100%',
    },
  },
})

export const awardItem = style({
  width: 'fit-content',
  flexDirection: 'column',
  padding: `${Spacing.Base} ${Spacing.Moderate}`,
  border: `1px solid ${Color.Line.Border}`,
  borderRadius: Radius.Rounded,
  '@media': {
    '(max-width: 500px)': {
      width: '100%',
      alignItems: 'center',
    },
  },
})
