import {
  colorVars,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import AwardCard from '@/components/award/Card';
import AwardCardSkeleton from '@/components/award/Card/skeleton';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { type RepresentAward } from '@/app/members/[id]/page';

interface Props extends RepresentAward {
  pending: boolean;
}

export default function MembersDetailRepresentativeAwardSection(_props: Props) {
  const { pending } = _props;

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
          대표 수상 내역
        </Typo.Petite>
        {pending
          ?           <AwardCardSkeleton count={1} />
          : (
            <AwardCard
              {..._props}
            />
          )}
      </VStack>
    </ContentSection>
  );
}
