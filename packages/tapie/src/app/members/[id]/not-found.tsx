'use client';

import { notFoundBase } from './page.css';

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
      className={notFoundBase}
    >
      <VStack spacing={spacingVars.petite}>
        <Icon
          name={GlyphIcon.FACE}
        />
        <Typo.Base color={colorVars.content.muted}>
          유저를 찾을 수 없습니다.
        </Typo.Base>
      </VStack>
      <Button.Default
        leadingIcon={GlyphIcon.ARROW_BACK}
        size={ButtonSize.SMALL}
        variant={ButtonVariant.SECONDARY}
        onClick={handleBackward}
      >
        눌러서 뒤로가기
      </Button.Default>
    </VStack>
  );
}
