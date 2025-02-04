import {
  AspectRatio,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

export default function TeamMember() {
  return (
    <HStack spacing={spacingVars.base}>
      <AspectRatio
        ratio={1}
        width={60}
      >
        <Skeleton
          fullWidth
          fullHeight
          borderRadius={radiusVars.full}
        />
      </AspectRatio>
      <VStack
        spacing={spacingVars.mini}
        align={StackAlign.START}
      >
        <HStack spacing={spacingVars.mini}>
          <HStack spacing={spacingVars.micro}>
            <Typo.Moderate weight={Weight.SEMIBOLD}>이름</Typo.Moderate>
            <Typo.Base
              weight={Weight.SEMIBOLD}
              color={colorVars.content.default}
            >
              역할
            </Typo.Base>
          </HStack>
          <Icon
            name={GlyphIcon.ARROW_FORWARD}
            size={16}
            color={colorVars.content.default}
          />
        </HStack>
        <Typo.Petite
          weight={Weight.MEDIUM}
          color={colorVars.content.default}
        >
          이 팀원의 설명과 수행한 일 설명
        </Typo.Petite>
      </VStack>
    </HStack>
  );
}
