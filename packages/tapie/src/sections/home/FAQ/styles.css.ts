import { Color, Radius, Spacing } from '@tapie-kr/inspire-react/variables';
import { style } from '@vanilla-extract/css';

export const section = style({
  maxWidth: 1400,
  padding: `${Spacing.Giant} ${Spacing.Moderate}`,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: Spacing.Large,
    },
  },
});

export const maxWidth = style({
  maxWidth: 650,
  '@media': {
    '(max-width: 768px)': {
      maxWidth: '100%',
    },
  },
});

export const question = style({
  userSelect: 'none',
});

export const answer = style({
  cursor: 'text',
});

export const dropdown = style([
  maxWidth,
  {
    width: '100%',
    padding: 20,
    background: Color.Surface.Elevated,
    border: `1px solid ${Color.Line.Border}`,
    borderRadius: Radius.Default,
    cursor: 'pointer',
  },
]);

export const content = style({
  overflow: 'hidden',
});
export const rotatedIcon = style({
  transform: 'rotate(180deg)',
});
