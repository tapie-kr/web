import {
  Button,
  ButtonVariant,
  GlyphIcon,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
} from '@tapie-kr/inspire-react';

export default function HeroActions() {
  const isPending = true;

  if (isPending) {
    return (
      <HStack
        fullWidth
        spacing={spacingVars.micro}
      >
        <Skeleton
          fullWidth
          height={48}
          borderRadius={radiusVars.default}
        />
      </HStack>
    );
  }

  return (
    <HStack
      fullWidth
      spacing={spacingVars.micro}
    >
      <Button.Default
        fullWidth
        leadingIcon={GlyphIcon.LINK}
      >
        프로젝트 바로가기
      </Button.Default>
      <Button.Icon
        variant={ButtonVariant.SECONDARY}
        icon={GlyphIcon.SHARE}
      />
    </HStack>
  );
}
