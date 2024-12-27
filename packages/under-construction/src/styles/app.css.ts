import { globalStyle } from '@vanilla-extract/css'
import { ComponentVariable } from '@tapie-kr/inspire-react/variables'

globalStyle('html, body', {
  width: '100%',
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

globalStyle('body', {
  padding: `0 ${ComponentVariable.Spacing._16}`,
  position: 'relative',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
})
