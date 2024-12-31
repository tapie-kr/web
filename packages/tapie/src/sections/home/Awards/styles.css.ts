import { ColorVariable, ComponentVariable } from '@tapie-kr/inspire-react/variables'
import { style } from '@vanilla-extract/css'

export const sectionStyle = style({
  maxWidth: 1400,
  padding: `100px ${ComponentVariable.Spacing.Jumbo}`,
  '@media': {
    '(max-width: 1000px)': {
      flexDirection: 'column',
    },
    '(max-width: 768px)': {
      padding: `${ComponentVariable.Spacing.Giant} ${ComponentVariable.Spacing.Moderate}`,
    },
  },
})

export const countStyle = style({
  '@media': {
    '(max-width: 1000px)': {
      display: 'none',
    },
  },
})

export const yearSelectorStyle = style({
  maxWidth: 800,
  padding: `${ComponentVariable.Spacing.Micro} 0`,
  '@media': {
    '(max-width: 1000px)': {
      maxWidth: '100%',
    },
  },
})

export const yearItemStyle = style({
  padding: `${ComponentVariable.Spacing.Micro} ${ComponentVariable.Spacing.Moderate}`,
  background: ColorVariable.Surface.Elevated,
  borderRadius: ComponentVariable.Radius.Smooth,
  transition: 'background-color 0.2s, color 0.2s',
})

export const yearItemActiveStyle = style({
  background: ColorVariable.Surface.Inverted.Elevated,
  color: ColorVariable.Content.Inverted.Emphasized,
})

export const awardListStyle = style({
  maxWidth: 800,
  '@media': {
    '(max-width: 1000px)': {
      maxWidth: '100%',
    },
  },
})

export const awardItemStyle = style({
  width: 'fit-content',
  flexDirection: 'column',
  padding: `${ComponentVariable.Spacing.Base} ${ComponentVariable.Spacing.Moderate}`,
  border: `1px solid ${ColorVariable.Line.Border}`,
  borderRadius: ComponentVariable.Radius.Rounded,
  '@media': {
    '(max-width: 500px)': {
      width: '100%',
      alignItems: 'center',
    },
  },
})