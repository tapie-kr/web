import { spacingVars, colorVars } from '@tapie-kr/inspire-react/lib'
import { getMobileMediaQuery } from '@tapie-kr/inspire-react/utils'
import { style } from '@vanilla-extract/css'

export const linkList = style({
  gap: spacingVars.base,
  ...getMobileMediaQuery({
    gap: spacingVars.moderate,
  }),
})

export const link = style({
  color: colorVars.content.muted,
  ':hover': {
    color: colorVars.content.emphasized,
  },
})