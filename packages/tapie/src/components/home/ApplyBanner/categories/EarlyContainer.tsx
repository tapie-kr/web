import * as s from '../style.css';

import { DStack, HStack } from '@tapie-kr/inspire-react';

import { type FormType } from '@tapie-kr/api-client';
import { toTemporalDateTime } from '@/utils/date';
import ApplyBannerEarly from './Early';

interface Props {
  data: FormType[];
}

export default function ApplyBannerEarlyContainer({ data }: Props) {
  return (
    <DStack
      fullWidth
      className={s.listContainer}
    >
      {data.map(form => (
        <ApplyBannerEarly
          key={form.id}
          name={form.name}
          startAt={toTemporalDateTime(form.startsAt)}
        />
      ))}
    </DStack>
  );
}
