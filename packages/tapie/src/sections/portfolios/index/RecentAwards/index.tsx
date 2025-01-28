import PortfolioSectionLabel from '@/components/portfolio/SectionLabel';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import List from './list';

export default function PortfoliosRecentAwardsSection() {
  return (
    <>
      <ContentSection
        maxWidth={1400}
        verticalPadding={spacingVars.moderate}
      >
        <VStack
          fullWidth
          spacing={spacingVars.petite}
          align={StackAlign.START}
        >
          <PortfolioSectionLabel isEmphasized>최신 수상 내역</PortfolioSectionLabel>
          <List />
        </VStack>
      </ContentSection>
    </>
  );
}
