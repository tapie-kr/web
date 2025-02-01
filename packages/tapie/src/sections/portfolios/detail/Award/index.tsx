import { description } from './styles.css';

import {
  Badge,
  BadgeTheme,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';

export default function PortfoliosDetailAwardSection() {
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
          <Typo.Medium weight={Weight.SEMIBOLD}>2025 무슨무슨대회</Typo.Medium>

          <Badge.Default
            theme={BadgeTheme.RED}
            leadingIcon={GlyphIcon.TROPHY}
            label='최우수상'
          />
        </HStack>

        <HStack
          className={description}
          spacing={spacingVars.tiny}
        >
          <Typo.Petite weight={Weight.MEDIUM}>2025 08-31</Typo.Petite>
          <Typo.Petite weight={Weight.MEDIUM}>어디어디 재단</Typo.Petite>
        </HStack>
      </VStack>
    </ContentSection>
  );
}
