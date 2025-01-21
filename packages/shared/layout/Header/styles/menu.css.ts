import { spacingVars, getMobileMediaQuery, colorVars } from '@tapie-kr/inspire-react'
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