'use client';

import { notFoundBase } from './style.css';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  Icon,
  spacingVars,
  Typo,
  VStack,
} from '@tapie-kr/inspire-react';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ApplyNotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 7000);

    const countdownInterval = setInterval(() => {
      setCountdown(prevCount => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);

      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <VStack
      fullHeight
      fullWidth
      spacing={spacingVars.moderate}
      className={notFoundBase}
    >
      <VStack spacing={spacingVars.petite}>
        <Icon
          name={GlyphIcon.INFO}
        />
        <Typo.Petite>
          활성화 된 폼을 찾을 수 없습니다.
        </Typo.Petite>
        <Typo.Petite color={colorVars.content.default}>
          {countdown}초 후 자동으로 메인화면으로 이동합니다.
        </Typo.Petite>
      </VStack>
      <Button.Default
        leadingIcon={GlyphIcon.ARROW_BACK}
        size={ButtonSize.SMALL}
        variant={ButtonVariant.SECONDARY}
        onClick={() => router.push('/')}
      >
        눌러서 뒤로가기
      </Button.Default>
    </VStack>
  );
}
