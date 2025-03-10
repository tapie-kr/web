'use client';

import * as s from '@/components/home/ApplyBanner/style.css';

import {
  Button,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type Temporal } from '@js-temporal/polyfill';
import Link from 'next/link';
import { useCountdown } from '@/hooks/useCountdown';
import { formatCountdown } from '@/utils/formatters';

interface Props {
  id:        number;
  endAt:     Temporal.PlainDateTime;
  formTitle: string;
}

export default function ApplyBannerNow({
  endAt,
  formTitle,
  id,
}: Props) {
  const remainingTime = useCountdown(endAt);

  return (
    <Link
      href={`/apply/${id}`}
      className={s.anchor}
    >
      <HStack
        fullWidth
        className={s.base}
        spacing={spacingVars.base}
        justify={StackJustify.BETWEEN}
      >
        <VStack align={StackAlign.START}>
          <Typo.Base color={colorVars.content.inverted.default}>{formTitle}</Typo.Base>
          <Typo.Medium
            weight={Weight.SEMIBOLD}
            color={colorVars.content.inverted.default}
          >
            {formatCountdown(remainingTime)}
          </Typo.Medium>
        </VStack>
        <Button.Default leadingIcon={GlyphIcon.SEND}>눌러서 지원하기</Button.Default>
      </HStack>
    </Link>
  );
}
