import { member } from './styles.css';

import { AspectRatio, HStack, radiusVars, Skeleton, spacingVars, StackJustify, Typo, VStack } from '@tapie-kr/inspire-react';
import Carousel from './carousel';

export default function InstagramHero() {
  return (
    <VStack fullWidth>
      <Member />
      <Carousel />
    </VStack>
  );
}

function Member() {
  return (
    <HStack
      fullWidth
      className={member}
      spacing={spacingVars.petite}
      justify={StackJustify.START}
    >
      <AspectRatio
        ratio={1}
        width={28}
      >
        <Skeleton
          fullWidth
          fullHeight
          borderRadius={radiusVars.full}
        />
      </AspectRatio>

      <Typo.Petite>jeewon__k 외 3명</Typo.Petite>
    </HStack>
  );
}
