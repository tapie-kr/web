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

type AwardCardProps = {
  name:         string;
  organization: string;
  year:         string;
  projectName:  string;
};

export default function AwardCard(_props: AwardCardProps) {
  const {
    organization,
    year,
    name,
    projectName,
  } = _props;

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
          {organization}
        </Typo.Micro>
        <HStack spacing={spacingVars.micro}>
          <Typo.Medium
            nowrap
            weight={Weight.SEMIBOLD}
          >
            {year} {name}
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
        <Typo.Base weight={Weight.MEDIUM}>{projectName}</Typo.Base>
        <Icon
          name={GlyphIcon.ARROW_FORWARD}
          size={20}
        />
      </HStack>
    </VStack>
  );
}
