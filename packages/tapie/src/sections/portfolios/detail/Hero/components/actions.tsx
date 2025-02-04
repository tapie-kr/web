import { Button, ButtonVariant, GlyphIcon, HStack, spacingVars } from '@tapie-kr/inspire-react';

export default function HeroActions() {
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
