import { description } from './styles.css';

import {
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import GradeBadge from '@/components/badge/GradeBadge';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { type PortfolioDetail } from '@/app/portfolios/[id]/page';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function PortfoliosDetailAwardSection(_props: Props) {
  const { pending, award } = _props;

  if (pending) {
    return (
      <ContentSection
        maxWidth={1400}
        verticalPadding={spacingVars.base}
      >
        <VStack
          spacing={spacingVars.mini}
          align={StackAlign.START}
        >
          <HStack spacing={spacingVars.petite}>
            <Skeleton
              width={188}
              height={32}
              borderRadius={radiusVars.default}
            />
            <Skeleton
              width={50}
              height={32}
              borderRadius={radiusVars.default}
            />
          </HStack>
          <HStack
            className={description}
            spacing={spacingVars.tiny}
          >
            <Skeleton
              width={152}
              height={20}
              borderRadius={radiusVars.default}
            />
          </HStack>
        </VStack>
      </ContentSection>
    );
  }

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.base}
    >
      <VStack
        spacing={spacingVars.mini}
        align={StackAlign.START}
      >
        <HStack spacing={spacingVars.petite}>
          <Typo.Medium weight={Weight.SEMIBOLD}>{award?.name}</Typo.Medium>
          <GradeBadge
            grade={award?.grade ?? 0}
            label={award?.gradeLabel ?? ''}
          />
        </HStack>
        <HStack
          className={description}
          spacing={spacingVars.tiny}
        >
          <Typo.Petite weight={Weight.MEDIUM}>{award?.organization}</Typo.Petite>
        </HStack>
      </VStack>
    </ContentSection>
  );
}
