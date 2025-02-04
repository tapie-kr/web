import {
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  StackWrap,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import TeamMember from './member';

export default function PortfoliosDetailTeamSection() {
  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.base}
    >
      <HStack
        spacing={spacingVars.giant}
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
