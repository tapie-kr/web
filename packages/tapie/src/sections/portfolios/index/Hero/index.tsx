'use client';

import {
  colorVars,
  spacingVars,
  StackAlign,
  Tag,
  Typo,
  TypographyVariant,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import Search from './search';

export default function PortfoliosHeroSection() {
  const isMobile = useMediaQuery();

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={isMobile ? spacingVars.moderate : spacingVars.jumbo}
    >
      <VStack
        fullWidth
        spacing={spacingVars.medium}
        align={StackAlign.START}
      >
        <VStack
          spacing={isMobile ? spacingVars.mini : spacingVars.petite}
          align={StackAlign.START}
        >
          <Typo
            weight={Weight.BOLD}
            variant={isMobile ? TypographyVariant.MEDIUM : TypographyVariant.JUMBO}
          >
            포트폴리오
          </Typo>
          <Typo
            tag={Tag.P}
            weight={Weight.MEDIUM}
            color={colorVars.content.default}
            variant={isMobile ? TypographyVariant.PETITE : TypographyVariant.MEDIUM}
          >
            TAPIE의 부원들이 이루어낸 성과들을 관람해보세요
          </Typo>
        </VStack>
        <Search />
      </VStack>
    </ContentSection>
  );
}
