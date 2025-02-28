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
  type UpdateFormApplicationRequest,
  useForm,
  useFormApplication,
  useMe,
  useUpdateFormApplication,
} from '@tapie-kr/api-client';
import { MemberUnit } from '@tapie-kr/api-client/enum';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function ApplyForm() {
  const { data, fetch } = useMe();
  const { data: myApplication, fetch: getMyApplication } = useFormApplication();
  const { mutate: update } = useUpdateFormApplication();
  const [currentId, setCurrentId] = useState<number>(0);

  const {
    data: currentForm,
    fetch: getCurrentForm,
    isSuccess: isCurrentFormSuccess,
  } = useForm();

  const router = useRouter();
  const [formData, setFormData] = useState<UpdateFormApplicationRequest>({ unit: MemberUnit.DEVELOPER });

  useEffect(() => {
    fetch();

    getCurrentForm();
  }, []);

  useEffect(() => {
    if (isCurrentFormSuccess) {
      if (currentForm?.data) {
        setCurrentId(currentForm.data.id);

        getMyApplication({ param: { formId: currentForm.data.id } });
      } else {
        router.push('/');
      }
    }
  }, [currentForm]);

  function validateForm() {
    if (!formData.phoneNumber || !(/^\d{3}-\d{3,4}-\d{4}$/).test(formData.phoneNumber)) {
      return false;
    }

    if (!formData.introduction) {
      return false;
    }

    if (!formData.motivation) {
      return false;
    }

    if (!formData.expectedActivities) {
      return false;
    }

    if (!formData.reasonToChoose) {
      return false;
    }

    return true;
  }

  function phoneNumberToInternational(phoneNumber: string | undefined) {
    if (!phoneNumber) {
      return undefined;
    }

    return '+82' + phoneNumber.slice(1);
  }

  function internationalToPhoneNumber(phoneNumber: string | undefined) {
    if (!phoneNumber) {
      return undefined;
    }

    return '0' + phoneNumber.slice(3);
  }

  const debouncedSubmit = debounce(() => {
    if (validateForm()) {
      update({
        param: { formId: currentId },
        data:  {
          ...formData,
          phoneNumber: phoneNumberToInternational(formData.phoneNumber),
        },
      });
    }
  }, 500);

  useEffect(() => {
    debouncedSubmit();

    return () => debouncedSubmit.cancel();
  }, [formData]);

  useEffect(() => {
    console.log(myApplication);

    if (myApplication?.data) {
      console.log(myApplication.data);

      setFormData({
        unit:               myApplication.data.unit,
        phoneNumber:        internationalToPhoneNumber(myApplication.data.phoneNumber),
        introduction:       myApplication.data.introduction,
        motivation:         myApplication.data.motivation,
        expectedActivities: myApplication.data.expectedActivities,
        reasonToChoose:     myApplication.data.reasonToChoose,
      });
    } else {
      setFormData({ unit: MemberUnit.DEVELOPER });
    }
  }, [myApplication]);

  return (
    <VStack
      fullWidth
      spacing={spacingVars.moderate}
    >
      {JSON.stringify(formData)}
      {
        validateForm() ? 'true' : 'false'
      }
      <SegmentGroup
        defaultValue={formData.unit || MemberUnit.DEVELOPER}
        onChange={unit => setFormData({
          ...formData, unit: unit as MemberUnit,
        })}
      >
        <Segment
          leadingIcon={GlyphIcon.CODE}
          label='개발자'
          value={MemberUnit.DEVELOPER}
        />
        <Segment
          leadingIcon={GlyphIcon.BRUSH}
          label='디자이너'
          value={MemberUnit.DESIGNER}
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
        <Input.Text
          placeholder='전화번호를 입력해주세요 (ex. 010-1234-5678)'
          value={formData.phoneNumber}
          onChange={e => {
            setFormData({
              ...formData, phoneNumber: e.target.value,
            });
          }}
        />
      </FormField>
      <FormField
        isEssential
        label='자기소개'
      >
        <Input.Paragraph
          placeholder='500자 이내로 입력해주세요'
          height={200}
          maxLength={500}
          value={formData.introduction}
          onChange={e => {
            setFormData({
              ...formData, introduction: e.target.value,
            });
          }}
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
          value={formData.motivation}
          onChange={e => {
            setFormData({
              ...formData, motivation: e.target.value,
            });
          }}
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
          value={formData.expectedActivities}
          onChange={e => {
            setFormData({
              ...formData, expectedActivities: e.target.value,
            });
          }}
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
          value={formData.reasonToChoose}
          onChange={e => {
            setFormData({
              ...formData, reasonToChoose: e.target.value,
            });
          }}
        />
      </FormField>
      <FormField
        isEssential
        label='포트폴리오'
      >
        <Input.DraggableFile
          multiple
          leadingIcon={GlyphIcon.UPLOAD}
          placeholder='PDF 파일을 업로드해주세요'
          accept='.pdf'
          height={150}
        />
      </FormField>
      <Button.Default
        fullWidth
      >제출하기
      </Button.Default>
    </VStack>
  );
}
