import { description } from './styles.css';

import PortfolioGradientCard from '@/components/portfolio/GradientCard';

import { Badge, colorVars, GlyphIcon, HStack, Icon, spacingVars, StackAlign, Typo, VStack, Weight } from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function MembersDetailRepresentativePortfolioSection() {
  return (
    <ContentSection
      verticalPadding={spacingVars.moderate}
      horizontalPadding={spacingVars.none}
    >
      <PortfolioGradientCard
        height={200}
        padding={spacingVars.base}
      >
        <VStack
          fullWidth
          spacing={spacingVars.micro}
          align={StackAlign.START}
          data-theme='dark'
        >
          <Badge.Default
            leadingIcon={GlyphIcon.CROWN}
            label='대표작'
          />
          <HStack spacing={spacingVars.petite}>
            <Typo.Moderate
              weight={Weight.SEMIBOLD}
              color={colorVars.content.emphasized}
            >프로젝트 이름
            </Typo.Moderate>
            <HStack
              spacing={spacingVars.mini}
              className={description}
            >
              <Typo.Petite
                weight={Weight.MEDIUM}
              >캐치프라이즈
              </Typo.Petite>
              <Icon
                name={GlyphIcon.ARROW_FORWARD}
                size={16}
              />
            </HStack>
          </HStack>
        </VStack>
      </PortfolioGradientCard>
    </ContentSection>
  );
}
