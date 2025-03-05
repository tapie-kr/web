import { icon } from '@tapie-kr/web-shared/layout/Header/styles/theme-switch.css';

import {
  Badge,
  BadgeTheme,
  BrandIcon,
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
import { type Skill } from '@/app/members/[id]/page';
import SkillSkeleton from './skeleton';

interface Props extends Skill {
  pending: boolean;
  skills?: Skill[];
}

export default function MembersDetailSkillsSection(_props: Props) {
  const { pending, skills } = _props;

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
          {pending
            ?           <SkillSkeleton />
            : (
              <>
                {skills?.map((skill: Skill) => (
                  <Skill
                    key={skill.label}
                    name={skill.label}
                    type={skill.verified ? SkillType.VERIFIED : skill.learning ? SkillType.LEARNING : undefined}
                    icon={skill.icon}
                  />
                ))}
              </>
            )}
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
  name?: string;
  icon?: string;
};

function Skill(props: SkillProps) {
  return (
    <HStack spacing={spacingVars.tiny}>
      <Icon name={icon as keyof typeof BrandIcon in BrandIcon ? BrandIcon[icon as keyof typeof BrandIcon] : undefined} />
      <Typo.Base weight={Weight.MEDIUM}>{props.name}</Typo.Base>
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
