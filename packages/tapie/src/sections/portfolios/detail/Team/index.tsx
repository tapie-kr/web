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
import { type PortfolioDetail } from '@/app/portfolios/[id]/page';
import TeamMember from './member';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function PortfoliosDetailTeamSection(_props: Props) {
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
        {_props.users?.map(user => (
          <TeamMember
            key={user.uuid}
            {...user}
            pending={_props.pending}
          />
        ))}
      </HStack>
    </ContentSection>
  );
}
