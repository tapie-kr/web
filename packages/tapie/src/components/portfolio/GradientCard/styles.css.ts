import { Radius } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const card = style({
  position: 'relative',
  height: 250,
  overflow: 'hidden',
  borderRadius: Radius.Smooth,
})

export const thumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  userSelect: 'none',
})

export const content = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(78, 78, 78, 0.35) 0%, rgba(78, 78, 78, 0.80) 100%)',
  backdropFilter: 'blur(4px)',
})
