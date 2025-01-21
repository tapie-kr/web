import { spacingVars } from '@tapie-kr/inspire-react/lib'
import { getShorthandedValue, getMobileMediaQuery } from '@tapie-kr/inspire-react/utils'
import { style } from '@vanilla-extract/css'

export const hero = style({
  padding: getShorthandedValue(spacingVars.base, spacingVars.moderate),
})

export const overflowHidden = style({
  overflow: 'hidden',
})

export const upperText = style([overflowHidden, {
  columnGap: spacingVars.base,
}])

export const lowerText = style([overflowHidden, {
  display: 'flex',
  columnGap: spacingVars.base
}])

export const tapeContainer = style({
  width: 129,
  height: 60,
  zIndex: 2,
  ...getMobileMediaQuery({
    width: 70,
  }),
})

export const tapeImage = style({
  width: 180,
  aspectRatio: '180/89',
  ...getMobileMediaQuery({
    width: 100,
  }),
})

export const tapieImage = style({
  width: '100%',
  height: 'calc(100vh - 200px)',
  minHeight: 1000,
  objectFit: 'cover',
  ...getMobileMediaQuery({
    minHeight: 477,
    maxHeight: 700,
  }),
})
