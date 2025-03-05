import {
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
import GradeBadge from '@/components/badge/GradeBadge';

import Link from 'next/link';
import { type ProjectReference } from '@/app/members/[id]/page';

type AwardCardProps = {
  name?:         string;
  organization?: string;
  gradeLabel?:   string;
  grade?:        number;
  project?:      ProjectReference;
};

export default function AwardCard(_props: AwardCardProps) {
  const {
    organization,
    name,
    gradeLabel,
    grade,
    project,
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
            {name}
          </Typo.Medium>
          <GradeBadge
            grade={grade ?? 0}
            label={gradeLabel ?? ''}
          />
        </HStack>
      </VStack>
      <Link href={project?.uuid ?? ''}>
        <HStack
          spacing={spacingVars.mini}
          style={{ color: colorVars.content.default }}
        >
          <Typo.Base weight={Weight.MEDIUM}>{project?.name}</Typo.Base>
          <Icon
            name={GlyphIcon.ARROW_FORWARD}
            size={20}
          />
        </HStack>
      </Link>
    </VStack>
  );
}
