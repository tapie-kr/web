import {
  HStack,
  Skeleton,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';

import Scroll from '@tapie-kr/web-shared/components/Scroll';

type AwardCardSkeletonProps = {
  count?: number;
};

export default function AwardCardSkeleton(_props: AwardCardSkeletonProps) {
  const { count = 4 } = _props;

  return (
    <Scroll direction='row'>
      <HStack spacing={spacingVars.giant}>
        {Array(count)
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
