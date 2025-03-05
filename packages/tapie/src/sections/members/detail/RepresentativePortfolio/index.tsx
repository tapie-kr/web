import { description as descriptionStyle } from './styles.css';

import {
  Badge,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import PortfolioGradientCard from '@/components/portfolio/GradientCard';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import Link from 'next/link';
import { type RepresentProject } from '@/app/members/[id]/page';
import { MembersDetailRepresentativePortfolioSectionSkeleton } from './skeleton';

interface Props extends RepresentProject {
  pending: boolean;
}

export default function MembersDetailRepresentativePortfolioSection(_props: Props) {
  const {
    pending,
    name,
    description,
    thumbnailUri,
    slug,
  } = _props;

  if (pending) {
    return (
      <MembersDetailRepresentativePortfolioSectionSkeleton />
    );
  }

  return (
    <Link
      href={`/portfolios/${slug}`}
      style={{ width: '100%' }}
    >
      <ContentSection
        verticalPadding={spacingVars.moderate}
        horizontalPadding={spacingVars.none}
      >
        <PortfolioGradientCard
          height={200}
          padding={spacingVars.base}
          thumbnailUri={thumbnailUri ?? ''}
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
              >
                {name}
              </Typo.Moderate>
              <HStack
                spacing={spacingVars.mini}
                className={descriptionStyle}
              >
                <Typo.Petite weight={Weight.MEDIUM}>{description}</Typo.Petite>
                <Icon
                  name={GlyphIcon.ARROW_FORWARD}
                  size={16}
                />
              </HStack>
            </HStack>
          </VStack>
        </PortfolioGradientCard>
      </ContentSection>
    </Link>
  );
}
