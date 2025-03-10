import {
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import List from './list';

export default function PortfolioProjectsSection() {
  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <VStack
        fullWidth
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <Typo.Moderate weight={Weight.SEMIBOLD}>작품</Typo.Moderate>
        {/* <Filter /> */}
        <VStack
          fullWidth
          spacing={spacingVars.medium}
        >
          <List />
          {/* <Button.Default
            fullWidth
            className={loadMoreButton}
            leadingIcon={GlyphIcon.REFRESH}
          >
            더 불러오기
          </Button.Default> */}
        </VStack>
      </VStack>
    </ContentSection>
  );
}
