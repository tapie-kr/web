import { Spacing, UtilityClass } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
})

export const hide = style({
  display: 'none',
})

export const button = style([UtilityClass.DesktopOnly, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
}])

export const leftButton = style([button, {
  left: Spacing.Mini,
}])

export const rightButton = style([button, {
  right: Spacing.Mini,
}])
