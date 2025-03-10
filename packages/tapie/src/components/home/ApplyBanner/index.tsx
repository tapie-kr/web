'use client';

import * as s from './style.css';

import { DStack } from '@tapie-kr/inspire-react';

import { Temporal } from '@js-temporal/polyfill';
import { type FormType, useForm } from '@tapie-kr/api-client';
import { useEffect, useState } from 'react';
import { toTemporalDateTime } from '@/utils/date';
import ApplyBannerEarly from './categories/Early';
import ApplyBannerNow from './categories/Now';

export default function ApplyBanner() {
  const { fetch: getForm, data } = useForm();
  const [formStatuses, setFormStatuses] = useState<Record<string, boolean>>({});
  const formData = data?.data as unknown as FormType[];

  useEffect(() => {
    getForm();
  }, []);

  useEffect(() => {
    if (formData) {
      const checkTimes = () => {
        const now = Temporal.Now.plainDateTimeISO();
        const newStatuses: Record<string, boolean> = {};

        formData.forEach(form => {
          const startAt = toTemporalDateTime(form.startsAt);

          newStatuses[form.id] = Temporal.PlainDateTime.compare(now, startAt) < 0;
        });

        setFormStatuses(newStatuses);
      };

      checkTimes();

      const intervalId = setInterval(checkTimes, 1000);

      return () => clearInterval(intervalId);
    }
  }, [formData]);

  if (data?.data === null || !data) {
    return null;
  }

  return (
    <DStack
      fullWidth
      className={s.listContainer}
    >
      {formData.map(form => {
        const isEarly = formStatuses[form.id];
        const startAt = toTemporalDateTime(form.startsAt);
        const endAt = toTemporalDateTime(form.endsAt);

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
              key={form.id}
              id={form.id}
              formTitle={form.name}
              endAt={endAt}
            />
          );
        }
      })}
    </DStack>
  );
}
