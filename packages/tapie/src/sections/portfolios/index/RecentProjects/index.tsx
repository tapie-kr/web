'use client';

import {
  Badge,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  StackJustify,
  Tag,
  Typo,
  useMediaQuery,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import GradientCard from '@/components/portfolio/GradientCard';
import PortfolioSectionLabel from '@/components/portfolio/SectionLabel';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import Scroll from '@tapie-kr/web-shared/components/Scroll';
import RecentProjectCardSkeleton from './skeleton';

export default function PortfoliosRecentProjectsSection() {
  const isMobile = useMediaQuery();

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.moderate}
    >
      <VStack
        fullWidth
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <PortfolioSectionLabel isEmphasized>최신 작품</PortfolioSectionLabel>
        <Scroll direction='row'>
          <HStack
            fullWidth
            spacing={spacingVars.petite}
            justify={StackJustify.START}
          >
            {/* <RecentProjectCard />
            {!isMobile && <RecentProjectCard />} */}
            <RecentProjectCardSkeleton />
            {!isMobile && <RecentProjectCard />}
          </HStack>
        </Scroll>
      </VStack>
    </ContentSection>
  );
}

function RecentProjectCard() {
  const isMobile = useMediaQuery();

  return (
    <GradientCard
      height={isMobile ? 200 : 250}
      padding={spacingVars.moderate}
    >
      <VStack
        fullWidth
        spacing={spacingVars.tiny}
        align={StackAlign.START}
        data-theme='dark'
      >
        <Badge.Default
          leadingIcon={GlyphIcon.TROPHY}
          label='수상작'
        />
        <HStack
          spacing={spacingVars.base}
          align={StackAlign.END}
        >
          <Typo.Medium
            tag={Tag.P}
            weight={Weight.SEMIBOLD}
            color={colorVars.content.emphasized}
          >
            프로젝트 이름
          </Typo.Medium>
          <HStack spacing={spacingVars.mini}>
            <Typo.Base
              tag={Tag.SPAN}
              weight={Weight.MEDIUM}
              color={colorVars.content.default}
            >
              프로젝트 설명
            </Typo.Base>
            <Icon
              name={GlyphIcon.ARROW_FORWARD}
              size={18}
              color={colorVars.content.default}
            />
          </HStack>
        </HStack>
      </VStack>
    </GradientCard>
  );
}
