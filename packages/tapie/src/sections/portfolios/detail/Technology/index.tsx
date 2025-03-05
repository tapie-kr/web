'use client';

import {
  spacingVars,
  Stack,
  StackAlign,
  StackDirection,
  StackJustify,
  StackWrap,
  useMediaQuery,
} from '@tapie-kr/inspire-react';

import ContentSection from '@tapie-kr/web-shared/components/ContentSection';
import { type PortfolioDetail } from '@/app/portfolios/[id]/page';
import { List } from './list';

interface Props extends PortfolioDetail {
  pending: boolean;
}

export default function PortfoliosDetailTechnologySection(_props: Props) {
  const isMobile = useMediaQuery();

  return (
    <ContentSection
      maxWidth={1400}
      verticalPadding={spacingVars.medium}
    >
      <Stack
        direction={isMobile ? StackDirection.COLUMN : StackDirection.ROW}
        spacing={spacingVars.jumbo}
        wrap={StackWrap.WRAP}
        align={StackAlign.START}
        justify={StackJustify.START}
      >
        {_props.skills?.map(skill => (
          <List
            key={skill.name}
            pending={_props.pending}
            title={skill.name}
            items={skill.items}
          />
        ))}
      </Stack>
    </ContentSection>
  );
}
