import {
  Badge,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  StackWrap,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function MembersDetailSkillsSection() {
  return (
    <ContentSection
      verticalPadding={spacingVars.moderate}
      horizontalPadding={spacingVars.none}
    >
      <VStack
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <Typo.Petite
          weight={Weight.SEMIBOLD}
          color={colorVars.content.default}
        >
          기술 스택
        </Typo.Petite>
        <HStack
          fullWidth
          spacing={spacingVars.moderate}
          wrap={StackWrap.WRAP}
        >
          <Skill type={SkillType.VERIFIED} />
          <Skill />
          <Skill />
          <Skill />
          <Skill type={SkillType.LEARNING} />
        </HStack>
      </VStack>
    </ContentSection>
  );
}

enum SkillType {
  VERIFIED,
  LEARNING,
}

type SkillProps = {
  type?: SkillType;
};

function Skill(props: SkillProps) {
  return (
    <HStack spacing={spacingVars.tiny}>
      <Icon name={GlyphIcon.DEFAULT} />
      <Typo.Base weight={Weight.MEDIUM}>기술 이름</Typo.Base>
      {props.type === SkillType.VERIFIED && (
        <Badge.Default
          theme={BadgeTheme.BLUE}
          leadingIcon={GlyphIcon.VERIFIED}
          label='인증'
        />
      )}
      {props.type === SkillType.LEARNING && (
        <Badge.Default
          theme={BadgeTheme.GREEN}
          leadingIcon={GlyphIcon.SCHOOL}
          label='학습중'
        />
      )}
    </HStack>
  );
}
