import {
  Badge,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

type AwardCardProps = {};

export default function AwardCard(_props: AwardCardProps) {
  return (
    <VStack
      spacing={spacingVars.micro}
      align={StackAlign.START}
    >
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Micro
          weight={Weight.MEDIUM}
          color={colorVars.content.default}
        >
          어디어디재단
        </Typo.Micro>

        <HStack spacing={spacingVars.micro}>
          <Typo.Medium
            nowrap
            weight={Weight.SEMIBOLD}
          >
            2025 무슨무슨대회
          </Typo.Medium>

          <Badge.Default
            theme={BadgeTheme.RED}
            leadingIcon={GlyphIcon.TROPHY}
            label='최우수상'
          />
        </HStack>
      </VStack>

      <HStack
        spacing={spacingVars.mini}
        style={{ color: colorVars.content.default }}
      >
        <Typo.Base weight={Weight.MEDIUM}>프로젝트 이름</Typo.Base>

        <Icon
          name={GlyphIcon.ARROW_FORWARD}
          size={20}
        />
      </HStack>
    </VStack>
  );
}
