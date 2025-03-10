'use client';

import { HStack } from '@tapie-kr/inspire-react';

import { Temporal } from '@js-temporal/polyfill';
import { type FormType, useForm } from '@tapie-kr/api-client';
import { useEffect, useState } from 'react';
import { toTemporalDateTime } from '@/utils/date';
import ApplyBannerEarly from './categories/Early';
import ApplyBannerNow from './categories/Now';

export default function ApplyBanner() {
  const { fetch: getForm, data } = useForm();
  const [isEarly, setIsEarly] = useState(true);
  const formData = data?.data as unknown as FormType[];

  useEffect(() => {
    getForm();
  }, []);

  useEffect(() => {
    if (data?.data) {
      const startAt = toTemporalDateTime(data.data.startsAt);

      // 초기 상태 설정
      const checkTime = () => {
        const now = Temporal.Now.plainDateTimeISO();

        setIsEarly(Temporal.PlainDateTime.compare(now, startAt) < 0);
      };

      // 처음 한 번 체크
      checkTime();

      // 1초마다 체크
      const intervalId = setInterval(checkTime, 1000);

      return () => clearInterval(intervalId);
    }
  }, [data]);

  if (data?.data === null || !data) {
    return null;
  }

  const startAt = toTemporalDateTime(data.data.startsAt);
  const endAt = toTemporalDateTime(data.data.endsAt);

  return (
    <HStack fullWidth>
      {formData.map(form => {
        if (isEarly) {
          return (
            <ApplyBannerEarly
              key={form.id}
              name={form.name}
              startAt={startAt}
            />
          );
        } else {
          return (
            <ApplyBannerNow
              formTitle={form.name}
              endAt={endAt}
            />
          );
        }
      })}
    </HStack>
  );
}
