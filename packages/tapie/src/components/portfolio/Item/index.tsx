'use client';

import { right, thumbnail } from './styles.css';

import {
  AspectRatio,
  Button,
  ButtonSize,
  colorVars,
  GlyphIcon,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  TypographyVariant,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

type PortfolioItemProps = {
  isWinner?: boolean;
};

export default function PortfolioItem(_props: PortfolioItemProps) {
  const isMobile = useMediaQuery();

  return (
    <HStack
      fullWidth
      justify={StackJustify.BETWEEN}
    >
      <HStack spacing={isMobile ? spacingVars.moderate : spacingVars.base}>
        <AspectRatio
          className={thumbnail}
          ratio={16 / 9}
        >
          <Skeleton
            fullWidth
            fullHeight
            borderRadius={radiusVars.default}
          />
        </AspectRatio>
        <VStack
          spacing={isMobile ? spacingVars.none : spacingVars.mini}
          align={StackAlign.START}
        >
          <Typo
            variant={isMobile ? TypographyVariant.BASE : TypographyVariant.MODERATE}
            weight={Weight.MEDIUM}
          >프로젝트 이름
          </Typo>
          <Typo
            variant={isMobile ? TypographyVariant.PETITE : TypographyVariant.BASE}
            weight={Weight.MEDIUM}
            color={colorVars.content.default}
          >
            프로젝트 설명
          </Typo>
        </VStack>
      </HStack>
      <HStack
        className={right}
        spacing={spacingVars.moderate}
      >
        <Typo.Base
          weight={Weight.MEDIUM}
        >2025-01-01
        </Typo.Base>
        <Button.Icon
          icon={GlyphIcon.ARROW_FORWARD}
          size={ButtonSize.MEDIUM}
        />
      </HStack>
    </HStack>
  );
}
