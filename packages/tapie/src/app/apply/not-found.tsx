import { notFoundBase } from './style.css';

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

export default function ApplyNotFound() {
  return (
    <VStack
      fullHeight
      fullWidth
      spacing={spacingVars.base}
      className={notFoundBase}
    >
      <VStack spacing={spacingVars.petite}>
        <Icon
          name={GlyphIcon.INFO}
          color={colorVars.content.default}
        />
        <Typo.Base color={colorVars.content.default}>
          활성화 된 폼을 찾을 수 없습니다.
        </Typo.Base>
      </VStack>
      <Button.Default
        leadingIcon={GlyphIcon.ARROW_BACK}
        size={ButtonSize.SMALL}
        variant={ButtonVariant.SECONDARY}
      >
        눌러서 뒤로가기
      </Button.Default>
    </VStack>
  );
}
