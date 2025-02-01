import { card, overlay } from './styles.css';

import {
  AspectRatio,
  colorVars,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import Scroll from '@tapie-kr/web-shared/components/Scroll';

export default function PortfoliosDetailSeeMoreSection() {
  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <VStack
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <Typo.Moderate weight={Weight.MEDIUM}>더 많은 작품</Typo.Moderate>

        <Scroll direction='row'>
          <HStack
            fullWidth
            spacing={spacingVars.micro}
            justify={StackJustify.START}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </HStack>
        </Scroll>
      </VStack>
    </ContentSection>
  );
}

function Card() {
  return (
    <AspectRatio
      className={card}
      width={250}
      ratio={16 / 9}
    >
      <VStack
        fullWidth
        fullHeight
        className={overlay}
        align={StackAlign.START}
        justify={StackJustify.END}
      >
        <Typo.Moderate
          weight={Weight.SEMIBOLD}
          color={colorVars.solid.translucent.white._90}
        >
          Plock
        </Typo.Moderate>

        <Typo.Petite
          weight={Weight.MEDIUM}
          color={colorVars.solid.translucent.white._60}
        >
          함께하는 사이드프로젝트를 위하여
        </Typo.Petite>
      </VStack>

      <Skeleton
        fullWidth
        fullHeight
        borderRadius={radiusVars.none}
      />
    </AspectRatio>
  );
}
