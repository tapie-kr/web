import { getShorthandedValue, spacingVars, getResponsiveQuery, getMobileMediaQuery, colorVars, radiusVars } from '@tapie-kr/inspire-react'
import { style } from '@vanilla-extract/css'

export const section = style({
  maxWidth: 1400,
  padding: getShorthandedValue(spacingVars.giant, spacingVars.moderate),
  ...getResponsiveQuery(1000, {
    flexDirection: 'column',
  }),
})

export const count = style({
  ...getMobileMediaQuery({
    display: 'none',
  }),
})

export const yearSelector = style({
  maxWidth: 800,
  padding: getShorthandedValue(spacingVars.micro, 0),
  ...getResponsiveQuery(1000, {
    maxWidth: '100%',
  }),
})

export const yearItem = style({
  padding: getShorthandedValue(spacingVars.micro, spacingVars.moderate),
  background: colorVars.surface.elevated,
  borderRadius: radiusVars.smooth,
})

export const yearItemActive = style({
  background: colorVars.surface.inverted.elevated,
  color: colorVars.content.inverted.emphasized,
})

export const awardList = style({
  maxWidth: 800,
  ...getResponsiveQuery(1000, {
    maxWidth: '100%',
  }),
})

export const awardItem = style({
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  gap: spacingVars.micro,
  padding: getShorthandedValue(spacingVars.base, spacingVars.moderate),
  border: getShorthandedValue('1px', 'solid', colorVars.line.border),
  borderRadius: radiusVars.rounded,
  ...getResponsiveQuery(500, {
    width: '100%',
    textAlign: 'center',
  }),
})
