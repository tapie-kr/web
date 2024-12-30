import { style } from '@vanilla-extract/css'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'

export const sectionStyle = style({
  paddingTop: 76
})

export const heroStyle = style({
  padding: `${ComponentVariable.Spacing.Base} ${ComponentVariable.Spacing.Moderate}`
})

export const textStyle = style({
  wordBreak: 'keep-all',
  whiteSpace: 'nowrap',
})

export const upperTextStyle = style({
  columnGap: ComponentVariable.Spacing.Base,
})

export const tapeContainerStyle = style({
  width: 129,
  height: 60,
  zIndex: 2,
  '@media': {
    '(max-width: 768px)': {
      width: 70,
    },
  },
})

export const tapeImageStyle = style({
  width: 180,
  aspectRatio: '180/89',
  '@media': {
    '(max-width: 768px)': {
      width: 100,
    },
  },
})

export const desktopOnlyTapieStyle = style({
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
})

export const tapieImageStyle = style({
  width: '100%',
  height: 1000,
  objectFit: 'cover',
  '@media': {
    '(max-width: 768px)': {
      height: 477,
    },
  },
})
