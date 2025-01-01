import { Color, Radius, Spacing } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  width: 60,
  height: 38,
  background: Color.Surface.Elevated,
  border: `1px solid ${Color.Line.Border}`,
  borderRadius: Radius.Pill,
  cursor: 'pointer',
})

export const thumb = style({
  position: 'absolute',
  width: 30,
  height: 30,
  background: Color.Surface.Raised,
  borderRadius: Radius.Circle,
  top: 4,
  left: 4,
  overflow: 'hidden',
  transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
})

export const dark = style({
  left: 26,
})

export const icon = style({
  position: 'absolute',
  width: 20,
  height: 20,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})
