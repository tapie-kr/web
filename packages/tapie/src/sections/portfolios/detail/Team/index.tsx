'use client';

import {
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  StackWrap,
  useMediaQuery,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import TeamMember from './member';

export default function PortfoliosDetailTeamSection() {
  const isMobile = useMediaQuery();

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.base}
    >
      <HStack
        spacing={isMobile ? spacingVars.medium : spacingVars.giant}
        wrap={StackWrap.WRAP}
        align={StackAlign.START}
        justify={StackJustify.START}
      >
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </HStack>
    </ContentSection>
  );
}
