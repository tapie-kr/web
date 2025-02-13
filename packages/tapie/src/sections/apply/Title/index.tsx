import {
  colorVars,
  spacingVars,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

export default function ApplyTitle() {
  return  (
    <VStack
      spacing={spacingVars.base}
    >
      <TAPIESymbol size={TAPIESymbolSize._32} />
      <VStack spacing={spacingVars.mini}>
        <Typo.Moderate
          weight={Weight.MEDIUM}
          color={colorVars.content.default}
        >세상의 간극을 같이 이어붙일
        </Typo.Moderate>
        <Typo.Medium weight={Weight.SEMIBOLD}>TAPIE 3기 모집</Typo.Medium>
      </VStack>
    </VStack>
  );
}
