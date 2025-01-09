import { style } from '@vanilla-extract/css'
import { Spacing } from '@tapie-kr/inspire-react/variables'

export const section = style({
  paddingTop: 76
})

export const hero = style({
  padding: `${Spacing.Base} ${Spacing.Moderate}`
})

export const overflowHidden = style({
  overflow: 'hidden',
})

export const upperText = style([overflowHidden, {
  columnGap: Spacing.Base,
}])

export const lowerText = style([overflowHidden, {
  display: 'flex',
  columnGap: Spacing.Base,
}])

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

export const tapieImage = style({
  width: '100%',
  height: 'calc(100vh - 200px)',
  minHeight: 1000,
  objectFit: 'cover',
  '@media': {
    '(max-width: 768px)': {
      minHeight: 477,
      maxHeight: 700,
    },
  },
})
