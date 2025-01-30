import { VStack } from '@cottons-kr/react-foundation';

import { spacingVars } from '@tapie-kr/inspire-react';
import { type ReactNode } from 'react';

type ContentSectionProps = {
  order?: number;
  verticalPadding?: string | number;
  horizontalPadding?: string | number;
  maxWidth?: string | number;
  children?: ReactNode;
};

export default function ContentSection(props: ContentSectionProps) {
  const {
    verticalPadding = spacingVars.none,
    horizontalPadding = spacingVars.base,
    maxWidth = '100%',
    children,
  } = props;

  return (
    <VStack
      tag='section'
      fullWidth
      align='center'
      style={{ padding: `${verticalPadding} ${horizontalPadding}` }}
    >
      <div
        style={{
          width: '100%',
          maxWidth,
        }}
      >
        {children}
      </div>
    </VStack>
  );
}
