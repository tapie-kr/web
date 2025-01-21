import { getShorthandedValue, spacingVars, colorVars, getMobileMediaQuery, radiusVars } from '@tapie-kr/inspire-react'
import { style } from '@vanilla-extract/css'

export const section = style({
  padding: getShorthandedValue(spacingVars.giant, 0),
  background: colorVars.surface.elevated,
})

export const title = style({
  maxWidth: 1400,
  padding: getShorthandedValue(0, spacingVars.moderate),
})

export const content = style({
  maxWidth: 1400,
  padding: getShorthandedValue(0, spacingVars.moderate),
  gap: spacingVars.moderate,
  ...getMobileMediaQuery({
    flexDirection: 'column',
    gap: spacingVars.giant,
  }),
})

export const list = style({
  maxWidth: 624,
  ...getMobileMediaQuery({
    maxWidth: '100%',
  }),
})

export const featureCard = style({
  padding: spacingVars.medium,
  background: colorVars.surface.default,
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.smooth,
  ...getMobileMediaQuery({
    width: '100%',
  }),
})

export const featureCardIcon = style({
  width: 60,
  height: 60,
  ...getMobileMediaQuery({
    width: 40,
    height: 40,
  }),
})
