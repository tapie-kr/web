'use client';

import { spacingVars, VStack } from '@tapie-kr/inspire-react';

import {
  type FormApplicationType,
  type FormType,
  useForm,
  useFormApplication,
  useMe,
} from '@tapie-kr/api-client';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { notFound } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { ApplyForm } from '@/sections/apply/Form';
import ApplyTitle from '@/sections/apply/Title';
import ApplyLoading from './loading';

export default function ApplyPage({ params }: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = use(params);
  const { data: currentForm, fetch: getCurrentForm } = useForm();
  const { data: myApplication, fetch: getMyApplication } = useFormApplication();
  const { data: sessionData, fetch: getSessionData } = useMe();
  const [formData, setFormData] = useState<FormType>();

  useEffect(() => {
    getSessionData();

    getCurrentForm();
  }, []);

  // 기본 Form 정보를 가져온 후 Application 정보를 가져옴
  useEffect(() => {
    const form = currentForm?.data.find(form => form.id === Number(id));

    setFormData(form);

    if (form === null || form?.available === false) notFound();

    if (form?.id) {
      getMyApplication({ param: { formId: form.id } });
    }
  }, [currentForm]);

  if (!currentForm || !sessionData || !myApplication || !formData) {
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
        <ApplyTitle title={formData.name} />
        <ApplyForm
          username={sessionData?.data.name}
          formId={formData.id}
          application={myApplication?.data as FormApplicationType}
        />
      </VStack>
    </ContentSection>
  );
}
