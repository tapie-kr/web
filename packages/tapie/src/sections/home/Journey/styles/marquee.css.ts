import { Color, Radius } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const marquee = style({
  position: 'relative',
  height: 200,
  overflow: 'hidden',
  '@media': {
    '(max-width: 768px)': {
      height: 95,
    },
  },
})

export const card = style({
  position: 'absolute',
  width: 370,
  height: 200,
  background: Color.Surface.Elevated,
  borderRadius: Radius.Smooth,
  flexShrink: 0,
  '@media': {
    '(max-width: 768px)': {
      width: 176,
      height: 95,
    },
  },
})
