'use client';

import {
  Badge,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  radiusVars,
  Skeleton,
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
  const isPending = true;

  if (isPending) {
    return (
      <VStack
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <VStack
          spacing={isMobile ? spacingVars.none : spacingVars.tiny}
          align={StackAlign.START}
        >

          <Skeleton
            width={84}
            height={46}
            borderRadius={radiusVars.default}
          />
          <Skeleton
            width={274}
            height={26}
            borderRadius={radiusVars.default}
          />
        </VStack>
        <HStack spacing={spacingVars.tiny}>

          <Skeleton
            width={210}
            height={26}
            borderRadius={radiusVars.default}
          />
        </HStack>
      </VStack>
    );
  }

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
          weight={Weight.BOLD}
          variant={isMobile ? TypographyVariant.MEDIUM : TypographyVariant.LARGE}
        >
          Plock
        </Typo>
        <Typo
          weight={isMobile ? Weight.MEDIUM : Weight.SEMIBOLD}
          color={colorVars.content.default}
          variant={isMobile ? TypographyVariant.BASE : TypographyVariant.MODERATE}
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
