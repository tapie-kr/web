import { Color, Radius } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const profileImage = style({
  width: 80,
  height: 80,
  background: Color.Surface.Raised,
  borderRadius: Radius.Full,
  '@media': {
    '(max-width: 600px)': {
      width: 70,
      height: 70,
    },
  },
})
