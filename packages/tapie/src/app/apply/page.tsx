'use client';

import { spacingVars, VStack } from '@tapie-kr/inspire-react';

import { useForm } from '@tapie-kr/api-client';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { ApplyForm } from '@/sections/apply/Form';
import ApplyTitle from '@/sections/apply/Title';

export default function ApplyPage() {
  const {
    data: currentForm,
    fetch: getCurrentForm,
    isSuccess: isCurrentFormSuccess,
  } = useForm();

  return (
    <ContentSection
      maxWidth={450}
      verticalPadding={spacingVars.large}
    >
      <VStack
        fullWidth
        spacing={spacingVars.large}
      >
        <ApplyTitle title={currentForm?.data.name} />
        <ApplyForm
          currentForm={currentForm}
          getCurrentForm={getCurrentForm}
          isCurrentFormSuccess={isCurrentFormSuccess}
        />
      </VStack>
    </ContentSection>
  );
}
