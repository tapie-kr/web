'use client';

import * as s from '@/components/home/ApplyBanner/style.css';

import {
  Button,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type Temporal } from '@js-temporal/polyfill';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useCountdown } from '@/hooks/useCountdown';
import { formatCountdown } from '@/utils/formatters';

interface Props {
  endAt:     Temporal.PlainDateTime;
  formTitle: string;
}

export default function ApplyBannerNow({ endAt, formTitle }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const remainingTime = useCountdown(endAt);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine symbol theme based on current theme
  const symbolTheme = mounted ? (theme === 'dark' ? 'light' : 'dark') : 'light';

  return (
    <Link href='apply'>
      <VStack
        fullWidth
        className={s.base}
        spacing={spacingVars.base}
      >
        <HStack spacing={spacingVars.jumbo} className={s.media}>
          <VStack>
            <Typo.Base color={colorVars.content.inverted.default}>남은 신청 기간</Typo.Base>
            <Typo.Medium
              weight={Weight.SEMIBOLD}
              color={colorVars.content.inverted.default}
            >
              {formatCountdown(remainingTime)}
            </Typo.Medium>
          </VStack>
          <VStack
            align={StackAlign.CENTER}
            spacing={spacingVars.tiny}
          >
            <div
              data-theme={symbolTheme}
              className={s.symbolBase}
            >
              <TAPIESymbol
                hasLabel
                size={TAPIESymbolSize._20}
              />
            </div>
            <Typo.Base color={colorVars.content.inverted.default}>{formTitle}</Typo.Base>
          </VStack>
          <Button.Default leadingIcon={GlyphIcon.SEND}>눌러서 TAPIE 지원하기</Button.Default>
        </HStack>
      </VStack>
    </Link>
  );
}
