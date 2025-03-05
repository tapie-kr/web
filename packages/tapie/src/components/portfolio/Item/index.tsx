'use client';

import { right, thumbnail, winnerBadge } from './styles.css';

import {
  AspectRatio,
  Badge,
  BadgeSize,
  BadgeTheme,
  Box,
  Button,
  ButtonSize,
  colorVars,
  GlyphIcon,
  HStack,
  Image,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  TypographyVariant,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type Temporal } from '@js-temporal/polyfill';
import Link from 'next/link';
import { toDateString } from '@/utils/date';

type PortfolioItemProps = {
  isWinner?: boolean;

  name:         string;
  catchPhrase:  string;
  thumbnailUri: string;
  releasedAt:   Temporal.PlainDateTime;
  portfolioUri: string;
};

export default function PortfolioItem(_props: PortfolioItemProps) {
  const {
    isWinner,
    name,
    catchPhrase,
    thumbnailUri,
    releasedAt,
    portfolioUri,
  } = _props;

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
          {isWinner && (
            <Box className={winnerBadge}>
              <Badge.Default
                size={BadgeSize.LARGE}
                theme={BadgeTheme.RED}
                label='수상작'
              />
            </Box>
          )}
          <Image
            fullWidth
            fullHeight
            src={thumbnailUri}
            alt={name}
          />
        </AspectRatio>
        <VStack
          spacing={isMobile ? spacingVars.none : spacingVars.mini}
          align={StackAlign.START}
        >
          <Typo
            weight={Weight.MEDIUM}
            variant={isMobile ? TypographyVariant.BASE : TypographyVariant.MODERATE}
          >
            {name}
          </Typo>
          <Typo
            weight={Weight.MEDIUM}
            color={colorVars.content.default}
            variant={isMobile ? TypographyVariant.PETITE : TypographyVariant.BASE}
          >
            {catchPhrase}
          </Typo>
        </VStack>
      </HStack>
      <HStack
        className={right}
        spacing={spacingVars.moderate}
      >
        <Typo.Base weight={Weight.MEDIUM}>{toDateString(releasedAt)}</Typo.Base>
        <Link href={portfolioUri}>
          <Button.Icon
            icon={GlyphIcon.ARROW_FORWARD}
            size={ButtonSize.MEDIUM}
          />
        </Link>
      </HStack>
    </HStack>
  );
}
