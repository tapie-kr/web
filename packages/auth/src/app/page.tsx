import { base, content, copyright } from './page.css';

import {
  BrandIcon,
  Button,
  spacingVars,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
} from '@tapie-kr/inspire-react';

export default function Page() {
  return (
    <VStack
      fullWidth
      className={base}
    >
      <VStack
        fullWidth
        spacing={spacingVars.large}
        className={content}
      >
        <TAPIESymbol
          hasLabel
          size={TAPIESymbolSize._32}
        />
        <Button.Default
          fullWidth
          leadingIcon={BrandIcon.GOOGLE}
        >Google로 TAPIE 로그인
        </Button.Default>
      </VStack>
      <VStack
        spacing={spacingVars.micro}
        className={copyright}
      >
        <Typo.Micro>© 2025 TAPIE. All rights reserved.</Typo.Micro>
        <Typo.Mini>로그인 시도 및 접속 기록은 모두 수집되며 비정상적인 활동 감지시 TAPIE는 대응을 위해 해당 기록을 활용할 수 있습니다.</Typo.Mini>
      </VStack>
    </VStack>
  );
}
