import { spacingVars, VStack } from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { ApplyForm } from '@/sections/apply/Form';
import ApplyTitle from '@/sections/apply/Title';

export default function ApplyPage() {
  return (
    <ContentSection
      maxWidth={450}
      verticalPadding={spacingVars.large}
    >
      <VStack
        fullWidth
        spacing={spacingVars.large}
      >
        <ApplyTitle />
        <ApplyForm />
      </VStack>
    </ContentSection>
  );
}
