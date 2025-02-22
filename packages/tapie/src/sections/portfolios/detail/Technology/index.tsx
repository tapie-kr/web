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
import { List } from './list';

export default function PortfoliosDetailTechnologySection() {
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
        <List title='개발' />
        <List title='운영' />
        <List title='기타' />
      </Stack>
    </ContentSection>
  );
}
