'use client';

import * as s from './style.css';

import { DStack } from '@tapie-kr/inspire-react';

import { Temporal } from '@js-temporal/polyfill';
import { type FormType, useForm } from '@tapie-kr/api-client';
import { useEffect, useMemo, useState } from 'react';
import { toTemporalDateTime } from '@/utils/date';
import ApplyBannerEarly from './categories/Early';
import ApplyBannerNow from './categories/Now';

export default function ApplyBanner() {
  const { fetch: getForm, data } = useForm();
  const [formStatusMap, setFormStatusMap] = useState<Record<string, boolean>>({});
  const [allFormsEnded, setAllFormsEnded] = useState<boolean>(false);
  const forms = useMemo(() => data?.data as FormType[] | undefined, [data]);

  useEffect(() => {
    getForm();
  }, [getForm]);

  useEffect(() => {
    if (!forms?.length) return;

    const updateFormStatuses = () => {
      const now = Temporal.Now.plainDateTimeISO();
      const newStatusMap: Record<string, boolean> = {};

      let hasActiveForm = false;

      forms.forEach(form => {
        const startAt = toTemporalDateTime(form.startsAt);
        const endAt = toTemporalDateTime(form.endsAt);

        // Form is in "early" state if current time is before start time
        newStatusMap[form.id] = Temporal.PlainDateTime.compare(now, startAt) < 0;

        // Form is still active if current time is before end time
        if (Temporal.PlainDateTime.compare(now, endAt) < 0) {
          hasActiveForm = true;
        }
      });

      setFormStatusMap(newStatusMap);

      setAllFormsEnded(!hasActiveForm);
    };

    // Update immediately and then set up interval
    updateFormStatuses();

    // Check every minute instead of every second for better performance
    const intervalId = setInterval(updateFormStatuses, 60000);

    return () => clearInterval(intervalId);
  }, [forms]);

  // Return null if data is not available or all forms have ended
  if (!forms?.length || allFormsEnded) {
    return null;
  }

  return (
    <DStack
      fullWidth
      className={s.listContainer}
    >
      {forms.map(form => {
        const isEarly = formStatusMap[form.id];
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
        }

        return (
          <ApplyBannerNow
            key={form.id}
            id={form.id}
            formTitle={form.name}
            endAt={endAt}
          />
        );
      })}
    </DStack>
  );
}
