import AwardCard from '@/components/award/Card';

import { colorVars, spacingVars, StackAlign, Typo, VStack, Weight } from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function MembersDetailRepresentativeAwardSection() {
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
        <AwardCard />
      </VStack>
    </ContentSection>
  );
}
