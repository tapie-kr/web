import { Color, Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const desktopOnly = style({
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
})

export const mobileOnly = style({
  display: 'none',
  '@media': {
    '(max-width: 768px)': {
      display: 'block',
    },
  },
})

export const linkList = style({
  gap: Spacing.Base,
  '@media': {
    '(max-width: 768px)': {
      gap: Spacing.Moderate,
    },
  },
})

export const link = style({
  color: Color.Content.Muted,
  ':hover': {
    color: Color.Content.Emphasized,
  },
})