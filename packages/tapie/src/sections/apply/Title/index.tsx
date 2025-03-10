import {
  colorVars,
  spacingVars,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

type Props = {
  title: string;
};

export default function ApplyTitle(_props: Props) {
  const { title } = _props;

  return (
    <VStack spacing={spacingVars.base}>
      <TAPIESymbol size={TAPIESymbolSize._32} />
      <VStack spacing={spacingVars.micro}>
        <VStack spacing={spacingVars.mini}>
          <Typo.Moderate
            weight={Weight.MEDIUM}
            color={colorVars.content.default}
          >
            세상의 간극을 같이 이어붙일
          </Typo.Moderate>
          <Typo.Medium weight={Weight.SEMIBOLD}>
            {title}
          </Typo.Medium>
        </VStack>
        <Typo.Tiny
          weight={Weight.MEDIUM}
          color={colorVars.content.default}
        >모든 내용은 자동으로 저장됩니다.
        </Typo.Tiny>
      </VStack>
    </VStack>
  );
}
