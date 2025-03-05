import {
  colorVars,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { type History } from '@/app/members/[id]/page';
import List from './list';
import HistoryListSkeleton from './skeleton';

interface Props {
  pending:  boolean;
  history?: History[];
}

export default function MembersDetailHistorySection(_props: Props) {
  const { pending, history } = _props;

  return (
    <ContentSection
      verticalPadding={spacingVars.moderate}
      horizontalPadding={spacingVars.none}
    >
      <VStack
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <Typo.Petite
          weight={Weight.SEMIBOLD}
          color={colorVars.content.default}
        >
          연혁
        </Typo.Petite>
        <VStack
          fullWidth
          spacing={spacingVars.moderate}
        >
          {pending
            ?             <HistoryListSkeleton />
            :             history?.map((history: History) => (
              <List
                key={history.year}
                {...history}
              />
            ))}
        </VStack>
      </VStack>
    </ContentSection>
  );
}
