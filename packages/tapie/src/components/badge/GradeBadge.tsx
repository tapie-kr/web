import { Badge, BadgeTheme, GlyphIcon } from '@tapie-kr/inspire-react';

interface Props {
  grade: number;
  label: string;
}

export default function GradeBadge(_props: Props) {
  const { grade, label } = _props;

  switch (grade) {
    case 1:
      return (
        <Badge.Default
          theme={BadgeTheme.RED}
          label={label}
          leadingIcon={GlyphIcon.TROPHY}
        />
      );

    case 2:
      return (
        <Badge.Default
          theme={BadgeTheme.YELLOW}
          label={label}
          leadingIcon={GlyphIcon.TROPHY}
        />
      );

    case 3:
      return (
        <Badge.Default
          theme={BadgeTheme.GREEN}
          label={label}
          leadingIcon={GlyphIcon.TROPHY}
        />
      );

    default:
      return null;
  }
}
