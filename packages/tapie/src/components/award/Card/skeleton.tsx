import {
  HStack,
  Skeleton,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';

export default function AwardCardSkeleton() {
  return (
    <VStack
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
  );
}
