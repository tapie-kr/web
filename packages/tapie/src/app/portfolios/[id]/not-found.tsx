'use client';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  Icon,
  spacingVars,
  Typo,
  VStack,
} from '@tapie-kr/inspire-react';

export default function PortfoliosNotFoundPage() {
  const handleBackward = () => {
    window.history.back();
  };

  return (
    <VStack
      fullHeight
      fullWidth
      spacing={spacingVars.base}
    >
      <VStack spacing={spacingVars.micro}>
        <Icon
          name={GlyphIcon.FOLDER_OPEN}
          color={colorVars.content.muted}
        />
        <Typo.Base color={colorVars.content.muted}>포트폴리오를 찾을 수 없습니다.</Typo.Base>
      </VStack>
      <Button.Default
        leadingIcon={GlyphIcon.ARROW_BACK}
        size={ButtonSize.SMALL}
        variant={ButtonVariant.SECONDARY}
        onClick={handleBackward}
      >눌러서 뒤로가기
      </Button.Default>
    </VStack>
  );
}
