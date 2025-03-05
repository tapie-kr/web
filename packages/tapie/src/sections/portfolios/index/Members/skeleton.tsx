import {
  AspectRatio,
  HStack,
  radiusVars,
  Skeleton,
  spacingVars,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';

import Scroll from '@tapie-kr/web-shared/components/Scroll';

export default function MemberSkeleton() {
  return (
    <Scroll direction='row'>
      <HStack
        fullWidth
        spacing={spacingVars.moderate}
        justify={StackJustify.START}
      >
        {Array(10).fill(0)
          .map((_, index) => (
            <VStack
              key={index}
              spacing={spacingVars.micro}
            >
              <AspectRatio
                ratio={1}
                width={80}
              >
                <Skeleton
                  fullHeight
                  fullWidth
                  borderRadius={radiusVars.full}
                />
              </AspectRatio>
              <Skeleton
                width={40}
                height={15}
                borderRadius={radiusVars.rounded}
              />
            </VStack>
          ))}
      </HStack>
    </Scroll>
  );
}
