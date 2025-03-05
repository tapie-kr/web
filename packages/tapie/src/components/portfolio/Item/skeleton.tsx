'use client';

import { thumbnail } from './styles.css';

import {
  AspectRatio,
  Grid,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  useMediaQuery,
  VStack,
} from '@tapie-kr/inspire-react';

export default function PortfolioItemSkeleton() {
  const isMobile = useMediaQuery();

  return (
    <Grid
      fullWidth
      rowGap={spacingVars.base}
      columnGap={spacingVars.petite}
      columnCount={2}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <HStack
          key={index}
          fullWidth
          justify={StackJustify.BETWEEN}
        >
          <HStack spacing={isMobile ? spacingVars.moderate : spacingVars.base}>
            <AspectRatio
              ratio={16 / 9}
              className={thumbnail}
            >
              <Skeleton
                fullWidth
                fullHeight
                borderRadius={radiusVars.default}
              />
            </AspectRatio>
            <VStack
              spacing={isMobile ? spacingVars.none : spacingVars.petite}
              align={StackAlign.START}
            >
              <Skeleton
                width={140}
                height={30}
                borderRadius={radiusVars.default}
              />
              <Skeleton
                width={80}
                height={20}
                borderRadius={radiusVars.subtle}
              />
            </VStack>
          </HStack>
        </HStack>
      ))}
    </Grid>
  );
}
