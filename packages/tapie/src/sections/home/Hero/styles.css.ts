import { style } from '@vanilla-extract/css'
import { Spacing } from '@tapie-kr/inspire-react/variables'

export const section = style({
  paddingTop: 76
})

export const hero = style({
  padding: `${Spacing.Base} ${Spacing.Moderate}`
})

export const upperText = style({
  columnGap: Spacing.Base,
  overflow: 'hidden',
})

export const lowerText = style({
  display: 'flex',
  columnGap: Spacing.Base,
  overflow: 'hidden',
})

export const tapeContainer = style({
  width: 129,
  height: 60,
  zIndex: 2,
  '@media': {
    '(max-width: 768px)': {
      width: 70,
    },
  },
})

export const tapeImage = style({
  width: 180,
  aspectRatio: '180/89',
  '@media': {
    '(max-width: 768px)': {
      width: 100,
    },
  },
})

export const desktopOnlyTapie = style({
  display: 'block',
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
})

export const tapieImage = style({
  width: '100%',
  height: 1000,
  objectFit: 'cover',
  '@media': {
    '(max-width: 768px)': {
      height: 477,
    },
  },
})
