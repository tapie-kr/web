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

import { type PortfolioDetail } from '@/app/portfolios/[id]/page';

type Props = Pick<PortfolioDetail, 'name' | 'summary' | 'tags' | 'award'> & {
  pending: boolean;
};

export default function HeroTitle(_props: Props) {
  const {
    name,
    summary,
    tags,
    pending,
    award,
  } = _props;

  const isMobile = useMediaQuery();

  if (pending) {
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
          {name}
        </Typo>
        <Typo
          weight={isMobile ? Weight.MEDIUM : Weight.SEMIBOLD}
          color={colorVars.content.default}
          variant={isMobile ? TypographyVariant.BASE : TypographyVariant.MODERATE}
        >
          {summary}
        </Typo>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        {award && Object.keys(award).length > 0 && (
          <Badge.Default
            theme={BadgeTheme.RED}
            leadingIcon={GlyphIcon.TROPHY}
            label='수상작'
          />
        )}
        {tags?.map((tag: string) => (
          <Badge.Default
            key={tag}
            label={tag}
          />
        ))}
      </HStack>
    </VStack>
  );
}
