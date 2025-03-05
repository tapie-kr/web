import { historyItem } from './styles.css';

import {
  HStack,
  Skeleton,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';

export function HistoryListSkeleton() {
  return (
    <HStack
      fullWidth
      spacing={spacingVars.moderate}
      align={StackAlign.START}
    >
      <Skeleton
        width={40}
        height={24}
      />
      <VStack
        fullWidth
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <HistoryItemSkeleton />
        <HistoryItemSkeleton />
        <HistoryItemSkeleton />
        <HistoryItemSkeleton />
      </VStack>
    </HStack>
  );
}

function HistoryItemSkeleton() {
  return (
    <HStack
      className={historyItem}
      spacing={spacingVars.petite}
    >
      <Skeleton
        width={45}
        height={18}
      />
      <Skeleton
        width={120}
        height={20}
      />
      <Skeleton
        width={16}
        height={16}
        borderRadius='50%'
      />
    </HStack>
  );
}

export default HistoryListSkeleton;
