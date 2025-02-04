import { introContainer } from './styles.css';

import PortfolioCarousel from '@/components/portfolio/Carousel';

import {
  BrandIcon,
  HStack,
  Icon,
  spacingVars,
  Stack,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import HeroActions from '../../components/actions';
import HeroDescription from '../../components/description';
import HeroTitle from '../../components/title';

export default function DefaultHero() {
  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <Stack
        fullWidth
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <PortfolioCarousel />
        <VStack
          fullHeight
          className={introContainer}
          align={StackAlign.START}
          justify={StackJustify.BETWEEN}
        >
          <VStack
            spacing={spacingVars.moderate}
            align={StackAlign.START}
          >
            <HeroTitle />
            <HeroDescription />
          </VStack>
          <VStack
            fullWidth
            spacing={spacingVars.petite}
            align={StackAlign.START}
          >
            <HStack spacing={spacingVars.tiny}>
              <Icon name={BrandIcon.GITHUB} />
              <Typo.Petite weight={Weight.SEMIBOLD}>https://github.com/jijiwon</Typo.Petite>
            </HStack>
            <HeroActions />
          </VStack>
        </VStack>
      </Stack>
    </ContentSection>
  );
}
