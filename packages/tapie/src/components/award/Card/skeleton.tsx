import {
  HStack,
  Skeleton,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';

import Scroll from '@tapie-kr/web-shared/components/Scroll';

export default function AwardCardSkeleton() {
  return (
    <Scroll direction='row'>
      <HStack spacing={spacingVars.giant}>
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <VStack
              key={index}
              spacing={spacingVars.micro}
              align={StackAlign.START}
            >
              <VStack
                spacing={spacingVars.micro}
                align={StackAlign.START}
              >
                <Skeleton
                  width={100}
                  height={20}
                  borderRadius={6}
                />
                <HStack>
                  <Skeleton
                    height={25}
                    width={200}
                    borderRadius={6}
                  />
                </HStack>
              </VStack>
              <Skeleton
                width={70}
                height={15}
                borderRadius={6}
              />
            </VStack>
          ))}
      </HStack>
    </Scroll>
  );
}
