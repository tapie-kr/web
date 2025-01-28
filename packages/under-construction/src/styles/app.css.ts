import { ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  width: '100%',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

globalStyle('body', {
  padding: `0 ${ComponentVariable.Spacing.Base}`,
  position: 'relative',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
})
