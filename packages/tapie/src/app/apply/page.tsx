'use client';

import * as s from './page.css';

import {
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { tracker } from '@openreplay/tracker';
import { useForm, useMe } from '@tapie-kr/api-client';
import { notFound, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ApplyLoading from './loading';

export default function ApplyPage() {
  const { data: currentForm, fetch: getCurrentForm } = useForm();
  const { data: sessionData, fetch: getSessionData } = useMe();
  const router = useRouter();

  useEffect(() => {
    if (sessionData?.data) {
      tracker.setUserID(sessionData.data.email);

      tracker.setMetadata('name', `${sessionData.data.id} ${sessionData.data.name}`);
    }
  }, [sessionData]);

  useEffect(() => {
    getSessionData();

    getCurrentForm();
  }, []);

  // 기본 Form 정보를 가져온 후 Application 정보를 가져옴
  useEffect(() => {
    const hasAvailableForm = currentForm?.data.some(form => form.available === true);

    if (currentForm?.data.length === 0 || hasAvailableForm === false) notFound();
  }, [currentForm]);

  if (!currentForm || !sessionData) {
    return <ApplyLoading />;
  }

  return (
    <VStack
      fullWidth
      fullHeight
      spacing={spacingVars.moderate}
      className={s.container}
    >
      <Typo.Medium weight={Weight.SEMIBOLD}>신청 분야를 선택해주세요</Typo.Medium>
      <VStack
        fullWidth
        spacing={spacingVars.micro}
      >
        {
          currentForm.data.map(form => (
            <HStack
              key={form.id}
              fullWidth
              justify={StackJustify.BETWEEN}
              className={s.form}
              onClick={() => {
                router.push(`/apply/${form.id}`);
              }}
            >
              <Typo.Base weight={Weight.MEDIUM}>{form.name}</Typo.Base>
              <Icon
                name={GlyphIcon.CHEVRON_RIGHT}
                size={16}
              />
            </HStack>
          ))
        }
      </VStack>
    </VStack>
  );
}
