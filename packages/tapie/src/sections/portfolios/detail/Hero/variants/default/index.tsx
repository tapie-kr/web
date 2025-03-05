import { introContainer } from './styles.css';

import {
  GlyphIcon,
  HStack,
  Icon,
  radiusVars,
  Skeleton,
  spacingVars,
  Stack,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import PortfolioCarousel from '@/components/portfolio/Carousel';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { type PortfolioDetail } from '@/app/portfolios/[id]/page';
import HeroActions from '@/sections/portfolios/detail/Hero/components/actions';
import HeroDescription from '@/sections/portfolios/detail/Hero/components/description';
import HeroTitle from '@/sections/portfolios/detail/Hero/components/title';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function DefaultHero(_props: Props) {
  const { pending } = _props;

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
        <PortfolioCarousel {..._props} />
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
            <HeroTitle {..._props} />
            <HeroDescription {..._props} />
          </VStack>
          <VStack
            fullWidth
            spacing={spacingVars.petite}
            align={StackAlign.START}
          >
            <HStack spacing={spacingVars.tiny}>
              {pending
                ?                   (
                  <Skeleton
                    width={200}
                    height={24}
                    borderRadius={radiusVars.default}
                  />
                )
                : (
                  <>
                    {_props.hyperlink && (
                      <>
                        <Icon name={GlyphIcon.LINK} />
                        <Typo.Petite weight={Weight.SEMIBOLD}>
                          {_props.hyperlink}
                        </Typo.Petite>
                      </>
                    )}
                  </>
                )}
            </HStack>
            <HeroActions {..._props} />
          </VStack>
        </VStack>
      </Stack>
    </ContentSection>
  );
}
