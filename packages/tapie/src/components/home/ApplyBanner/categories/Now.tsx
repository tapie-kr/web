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

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ApplyBannerNow() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const symbolTheme = mounted ? (theme === 'dark' ? 'light' : 'dark') : 'light';

  return (
    <Link href='apply'>
      <VStack
        fullWidth
        className={s.base}
        spacing={spacingVars.base}
      >
        <HStack spacing={spacingVars.jumbo}>
          <VStack>
            <Typo.Base color={colorVars.content.inverted.default}>남은 신청 기간</Typo.Base>
            <Typo.Medium
              weight={Weight.SEMIBOLD}
              color={colorVars.content.inverted.default}
            >
              00:00:00
            </Typo.Medium>
          </VStack>
          <HStack
            align={StackAlign.CENTER}
            spacing={spacingVars.petite}
          >
            <div
              data-theme={symbolTheme}
              className={s.symbolBase}
            >
              <TAPIESymbol
                hasLabel
                size={TAPIESymbolSize._24}
              />
            </div>
            <Typo.Moderate color={colorVars.content.inverted.default}>3기</Typo.Moderate>
          </HStack>
          <Button.Default leadingIcon={GlyphIcon.SEND}>눌러서 TAPIE 지원하기</Button.Default>
        </HStack>
      </VStack>
    </Link>
  );
}
