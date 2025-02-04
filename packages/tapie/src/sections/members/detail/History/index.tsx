import { colorVars, spacingVars, StackAlign, Typo, VStack, Weight } from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import List from './list';

export default function MembersDetailHistorySection() {
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
          연혁
        </Typo.Petite>
        <VStack
          fullWidth
          spacing={spacingVars.moderate}
        >
          <List />
          <List />
        </VStack>
      </VStack>
    </ContentSection>
  );
}
