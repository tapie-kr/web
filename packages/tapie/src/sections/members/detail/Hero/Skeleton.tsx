import { section } from './styles.css';

import {
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  StackJustify,
  StackWrap,
  VStack,
} from '@tapie-kr/inspire-react';

export default function MembersDetailHeroSectionSkeleton() {
  return (
    <VStack
      fullWidth
      className={section}
      align={StackAlign.START}
      spacing={spacingVars.petite}
    >
      <HStack
        spacing={spacingVars.petite}
        justify={StackJustify.START}
      >
        <Skeleton
          width={100}
          height={45}
          borderRadius={radiusVars.rounded}
        />
        <Skeleton
          width={50}
          height={30}
          borderRadius={radiusVars.rounded}
        />
      </HStack>
      <HStack
        fullWidth
        spacing={spacingVars.base}
        wrap={StackWrap.WRAP}
        justify={StackJustify.START}
      >
        <Skeleton
          width={60}
          height={30}
        />
        <Skeleton
          width={60}
          height={30}
        />
        <Skeleton
          width={60}
          height={30}
        />
      </HStack>
    </VStack>
  );
}
