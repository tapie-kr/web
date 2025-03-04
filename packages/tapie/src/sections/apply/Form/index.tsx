'use client';

import * as s from './style.css';

import {
  Button,
  ButtonVariant,
  colorVars,
  Dialog,
  FormField,
  GlyphIcon,
  HStack,
  Input,
  Label,
  Segment,
  SegmentGroup,
  spacingVars,
  StackAlign,
  Typo,
  useToggle,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import UploadedFile from '@/components/form/UploadedFile';

import {
  type FormApplicationPortfolioType,
  type FormResponse,
  type UpdateFormApplicationRequest,
  useDeleteFormApplicationFile,
  useFormApplication,
  useFormApplicationSubmit,
  useMe,
  useUpdateFormApplication,
  useUploadFormApplicationFile,
} from '@tapie-kr/api-client';
import { MemberUnit } from '@tapie-kr/api-client/enum';
import { Regex } from '@tapie-kr/web-shared/constants/regex';
import { useDebounce } from '@tapie-kr/web-shared/hooks/use-debounce';
import { internationalToPhoneNumber, isValidPhoneNumber, phoneNumberToInternational } from '@tapie-kr/web-shared/lib/format/phoneNumber';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ApplyFormProps {
  currentForm:          FormResponse | null;
  getCurrentForm:       () => void;
  isCurrentFormSuccess: boolean;
}

export function ApplyForm({
  currentForm,
  getCurrentForm,
  isCurrentFormSuccess,
}: ApplyFormProps) {
  const { data, fetch } = useMe();
  const { data: myApplication, fetch: getMyApplication } = useFormApplication();
  const { mutate: uploadFile } = useUploadFormApplicationFile();
  const { mutate: deleteFile } = useDeleteFormApplicationFile();
  const { mutate: submitForm } = useFormApplicationSubmit();
  const { mutate: update } = useUpdateFormApplication();
  const [currentId, setCurrentId] = useState<number>(0);
  const [phoneNumberError, setPhoneNumberError] = useState<string | undefined>(undefined);

  const [uploadedFiles, setUploadedFiles] = useState<
    FormApplicationPortfolioType[]
  >([]);

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState<UpdateFormApplicationRequest>({ unit: MemberUnit.DEVELOPER });
  const debouncedFormData = useDebounce(formData, 1000);
  const submitModalToggler = useToggle();

  const [
    _isSubmitModalVisible,
    submitToggle,
    setSubmitModalVisible,
  ] =
    submitModalToggler;

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    fetch();

    getCurrentForm();
  }, []);

  // currentForm이 성공적으로 로드되면 currentId를 설정하고 지원서 정보를 가져옴
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
    if (
      !formData.phoneNumber ||
      !Regex.phoneNumber.test(formData.phoneNumber)
    ) {
      return false;
    }

    return true;
  }

  // debounce 처리된 formData가 변경될 때만 API 호출
  useEffect(() => {
    // 초기 렌더링 시 불필요한 API 호출 방지
    if (Object.keys(debouncedFormData).length <= 1) return;

    if (validateForm()) {
      update({
        param: { formId: currentId },
        data:  {
          ...debouncedFormData,
          phoneNumber: phoneNumberToInternational(debouncedFormData.phoneNumber),
        },
      });
    }
  }, [debouncedFormData, currentId]);

  // myApplication이 변경될 때 formData를 업데이트
  useEffect(() => {
    if (myApplication?.data) {
      setFormData({
        unit:               myApplication.data.unit,
        phoneNumber:        internationalToPhoneNumber(myApplication.data.phoneNumber),
        introduction:       myApplication.data.introduction,
        motivation:         myApplication.data.motivation,
        expectedActivities: myApplication.data.expectedActivities,
        reasonToChoose:     myApplication.data.reasonToChoose,
      });

      setIsFormSubmitted(myApplication.data.submitted);

      if (myApplication.data.portfolio) {
        setUploadedFiles(Array.isArray(myApplication.data.portfolio)
          ? myApplication.data.portfolio
          : [myApplication.data.portfolio]);
      }
    } else {
      setFormData({ unit: MemberUnit.DEVELOPER });
    }
  }, [myApplication]);

  // 전화번호 형식 검증
  useEffect(() => {
    const error = !isValidPhoneNumber(formData.phoneNumber)
      ? '전화번호가 형식에 맞지 않습니다.'
      : undefined;

    setPhoneNumberError(error);
  }, [formData.phoneNumber]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files || files.length === 0) {
      await deleteFile({ param: { formId: currentId } }).then(async () => {
        await setUploadedFiles([]);
      });

      return;
    }

    const formData = new FormData;

    formData.append('file', files[0]);

    await uploadFile({
      param: { formId: currentId },
      data:  formData,
    });
  };

  const handleDeleteFile = async () => {
    await deleteFile({ param: { formId: currentId } }).then(async () => {
      await setUploadedFiles([]);
    });
  };

  /* eslint-disable no-alert */
  const handleSubmit = async () => {
    await submitForm({ param: { formId: currentId } })
      .then(() => {
        alert('지원서가 제출되었습니다.');

        router.push('/');
      })
      .catch(err => {
        if (err.response.status === 400) {
          alert('모든 항목을 작성해주세요.');

          return;
        }
      });
  };

  return (
    <VStack
      fullWidth
      spacing={spacingVars.moderate}
    >
      <SegmentGroup
        defaultValue={formData.unit || MemberUnit.DEVELOPER}
        onChange={unit => setFormData({
          ...formData,
          unit: unit as MemberUnit,
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
              ...formData,
              phoneNumber: e.target.value,
            });
          }}
        />
        {phoneNumberError && (
          <Typo.Petite color={colorVars.solid.red}>
            {phoneNumberError}
          </Typo.Petite>
        )}
      </FormField>
      <TextareaField
        label='자기소개'
        value={formData.introduction}
        onChange={value => setFormData({
          ...formData,
          introduction: value,
        })}
      />
      <TextareaField
        label='지원동기'
        value={formData.motivation}
        onChange={value => setFormData({
          ...formData,
          motivation: value,
        })}
      />
      <TextareaField
        label='기대되는 활동'
        value={formData.expectedActivities}
        onChange={value => setFormData({
          ...formData,
          expectedActivities: value,
        })}
      />
      <TextareaField
        label='자신을 뽑아야 하는 이유'
        value={formData.reasonToChoose}
        onChange={value => setFormData({
          ...formData,
          reasonToChoose: value,
        })}
      />
      {uploadedFiles.length === 0
        ? (
          <FormField
            isEssential
            label='포트폴리오'
          >
            <Input.DraggableFile
              multiple
              leadingIcon={GlyphIcon.UPLOAD}
              placeholder='압축 파일을 업로드해주세요'
              accept='.zip, .rar'
              height={150}
              onChange={handleFileUpload}
              onDelete={handleDeleteFile}
            />
          </FormField>
        )
        : (
          <VStack
            fullWidth
            align={StackAlign.START}
            spacing={6}
          >
            <Label isEssential>포트폴리오</Label>
            {uploadedFiles.map(file => (
              <UploadedFile
                key={file.uuid}
                file={file}
                onDelete={handleDeleteFile}
              />
            ))}
          </VStack>
        )}
      <Button.Default
        fullWidth
        disabled={isFormSubmitted}
        onClick={submitToggle}
      >
        {isFormSubmitted ? '이미 지원서가 제출 되었습니다' : '지원서 제출'}
      </Button.Default>
      <Typo.Petite color={colorVars.solid.red}>
        지원서 제출 후에는 수정이 불가능합니다.
      </Typo.Petite>
      <Dialog toggler={submitModalToggler}>
        <VStack
          spacing={spacingVars.medium}
          className={s.submitDialog}
        >
          <VStack spacing={spacingVars.micro}>
            <Typo.Moderate weight={Weight.SEMIBOLD}>
              정말로 제출하시겠습니까?
            </Typo.Moderate>
            <Typo.Base
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >
              지원서 제출 후에는 수정이 불가능합니다.
            </Typo.Base>
          </VStack>
          <HStack
            fullWidth
            spacing={spacingVars.mini}
          >
            <Button.Default
              fullWidth
              leadingIcon={GlyphIcon.UPLOAD}
              onClick={handleSubmit}
            >
              제출하기
            </Button.Default>
            <Button.Default
              fullWidth
              variant={ButtonVariant.SECONDARY}
              onClick={() => setSubmitModalVisible(false)}
            >
              닫기
            </Button.Default>
          </HStack>
        </VStack>
      </Dialog>
    </VStack>
  );
}

// Input.Paragraph 컴포넌트 공통화
interface TextareaFieldProps {
  label:        string;
  placeholder?: string;
  value:        string | undefined;
  onChange:     (value: string) => void;
}

const TextareaField = ({
  label,
  placeholder,
  value,
  onChange,
}: TextareaFieldProps) => (
  <FormField
    isEssential
    label={label}
  >
    <Input.Paragraph
      placeholder={placeholder || '500자 이내로 입력해주세요'}
      height={200}
      maxLength={500}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </FormField>
);
