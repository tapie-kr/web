'use client';

import {
  Button,
  FormField,
  GlyphIcon,
  Input,
  Segment,
  SegmentGroup,
  spacingVars,
  VStack,
} from '@tapie-kr/inspire-react';

import {
  useCreateFormApplication,
  useForm,
  useFormApplication,
  useMe,
  useUpdateFormApplication,
} from '@tapie-kr/api-client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function ApplyForm() {
  const { data, fetch } = useMe();
  const { data: myApplication, fetch: getMyApplication } = useFormApplication();
  const { mutate: create } = useCreateFormApplication();
  const { muatate: update } = useUpdateFormApplication();
  const [hasApplication, setHasApplication] = useState(false);

  const {
    data: currentForm,
    fetch: getCurrentForm,
    isSuccess: isCurrentFormSuccess,
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    fetch();

    getCurrentForm();
  }, []);

  useEffect(() => {
    if (isCurrentFormSuccess) {
      if (currentForm?.data) {
        getMyApplication({ param: { formId: currentForm.data.id } });
      } else {
        router.push('/');
      }
    }
  }, [currentForm]);

  useEffect(() => {
    if (myApplication?.data) {
      setHasApplication(true);
    }
  }, [myApplication]);

  return (
    <VStack
      fullWidth
      spacing={spacingVars.moderate}
    >
      <SegmentGroup defaultValue='developer'>
        <Segment
          leadingIcon={GlyphIcon.CODE}
          label='개발자'
          value='developer'
        />
        <Segment
          leadingIcon={GlyphIcon.BRUSH}
          label='디자이너'
          value='designer'
        />
      </SegmentGroup>
      <FormField
        isEssential
        label='이름'
      >
        <Input.Text
          disabled
          value={data?.data.name.slice(5)}
        />
      </FormField>
      <FormField
        isEssential
        label='학번'
      >
        <Input.Text
          disabled
          value={data?.data.name.slice(0, 5)}
        />
      </FormField>
      <FormField
        isEssential
        label='전화번호'
      >
        <Input.Text placeholder='전화번호를 입력해주세요' />
      </FormField>
      <FormField
        isEssential
        label='자기소개'
      >
        <Input.Paragraph
          placeholder='500자 이내로 입력해주세요'
          height={200}
          maxLength={500}
        />
      </FormField>
      <FormField
        isEssential
        label='지원동기'
      >
        <Input.Paragraph
          placeholder='500자 이내로 입력해주세요'
          height={200}
          maxLength={500}
        />
      </FormField>
      <FormField
        isEssential
        label='기대되는 활동'
      >
        <Input.Paragraph
          placeholder='500자 이내로 입력해주세요'
          height={200}
          maxLength={500}
        />
      </FormField>
      <FormField
        isEssential
        label='자신을 뽑아야할 이유'
      >
        <Input.Paragraph
          placeholder='500자 이내로 입력해주세요'
          height={200}
          maxLength={500}
        />
      </FormField>
      <FormField
        isEssential
        label='포트폴리오'
      >
        <Input.DraggableFile
          leadingIcon={GlyphIcon.UPLOAD}
          placeholder='PDF 권장'
          height={150}
        />
      </FormField>
      <Button.Default fullWidth>제출하기</Button.Default>
    </VStack>
  );
}
