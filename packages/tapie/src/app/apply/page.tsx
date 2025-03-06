'use client';

import { spacingVars, VStack } from '@tapie-kr/inspire-react';

import {
  type FormApplicationType,
  useForm,
  useFormApplication,
  useMe,
} from '@tapie-kr/api-client';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { useEffect } from 'react';
import { ApplyForm } from '@/sections/apply/Form';
import ApplyTitle from '@/sections/apply/Title';
import ApplyLoading from './loading';

export default function ApplyPage() {
  const { data: currentForm, fetch: getCurrentForm } = useForm();
  const { data: myApplication, fetch: getMyApplication } = useFormApplication();
  const { data: sessionData, fetch: getSessionData } = useMe();

  useEffect(() => {
    if (currentForm?.data.id) {
      getMyApplication({ param: { formId: currentForm?.data.id } });
    } else {
      const fetch = async () => {
        getSessionData();

        getCurrentForm().catch(() => {
          throw new Error('Failed to fetch form');
        });
      };

      fetch();
    }
  }, [currentForm]);

  if (!currentForm || !sessionData || !myApplication) {
    return <ApplyLoading />;
  }

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
          username={sessionData?.data.name}
          formId={currentForm.data.id}
          application={myApplication?.data as FormApplicationType}
        />
      </VStack>
    </ContentSection>
  );
}
