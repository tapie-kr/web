'use client';

import { Temporal } from '@js-temporal/polyfill';
import { useForm } from '@tapie-kr/api-client';
import { useEffect, useState } from 'react';
import { toTemporalDateTime } from '@/utils/date';
import ApplyBannerEarly from './categories/Early';
import ApplyBannerNow from './categories/Now';

export default function ApplyBanner() {
  const { fetch: getForm, data } = useForm();
  const [currentTime, setCurrentTime] = useState(new Date);

  useEffect(() => {
    getForm();

    // Update current time
    const timer = setInterval(() => {
      setCurrentTime(new Date);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (data?.data === null || !data) {
    return null;
  }

  const startAt = toTemporalDateTime(data.data.startsAt);
  const endAt = toTemporalDateTime(data.data.endsAt);
  const now = toTemporalDateTime(currentTime.toISOString());
  const isEarly = Temporal.PlainDateTime.compare(startAt, now) > 0;

  return (
    <>
      {isEarly
        ? <ApplyBannerEarly startAt={startAt} />
        : (
          <ApplyBannerNow
            formTitle={data.data.name}
            endAt={endAt}
          />
        )}
    </>
  );
}
