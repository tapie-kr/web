'use client';

import {
  Badge,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  TypographyVariant,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

export default function HeroTitle() {
  const isMobile = useMediaQuery();

  return (
    <VStack
      spacing={spacingVars.base}
      align={StackAlign.START}
    >
      <VStack
        spacing={isMobile ? spacingVars.none : spacingVars.tiny}
        align={StackAlign.START}
      >
        <Typo
          variant={isMobile ? TypographyVariant.MEDIUM : TypographyVariant.LARGE}
          weight={Weight.BOLD}
        >
          Plock
        </Typo>
        <Typo
          variant={isMobile ? TypographyVariant.BASE : TypographyVariant.MODERATE}
          weight={isMobile ? Weight.MEDIUM : Weight.SEMIBOLD}
          color={colorVars.content.default}
        >
          함께하는 사이드프로젝트를 위하여
        </Typo>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        <Badge.Default
          theme={BadgeTheme.RED}
          leadingIcon={GlyphIcon.TROPHY}
          label='수상작'
        />
        <Badge.Default label='앱' />
        <Badge.Default label='출품작' />
        <Badge.Default label='해커톤' />
      </HStack>
    </VStack>
  );
}
