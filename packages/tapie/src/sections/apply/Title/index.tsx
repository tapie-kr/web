import {
  colorVars,
  spacingVars,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

interface ApplyTitleProps {
  title: string | undefined;
}

export default function ApplyTitle({ title }: ApplyTitleProps) {
  return (
    <VStack spacing={spacingVars.base}>
      <TAPIESymbol size={TAPIESymbolSize._32} />
      <VStack spacing={spacingVars.mini}>
        <Typo.Moderate
          weight={Weight.MEDIUM}
          color={colorVars.content.default}
        >
          세상의 간극을 같이 이어붙일
        </Typo.Moderate>
        <Typo.Medium weight={Weight.SEMIBOLD}>
          {title ?? '불러오는 중...'}
        </Typo.Medium>
      </VStack>
    </VStack>
  );
}
