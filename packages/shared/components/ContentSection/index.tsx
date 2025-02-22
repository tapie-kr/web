import { VStack } from '@cottons-kr/react-foundation';
import { spacingVars } from '@tapie-kr/inspire-react';

import { type ReactNode } from 'react';

type ContentSectionProps = {
  order?:             number;
  verticalPadding?:   string | number;
  horizontalPadding?: string | number;
  maxWidth?:          string | number;
  className?:         string;
  children?:          ReactNode;
};

export default function ContentSection(props: ContentSectionProps) {
  const {
    verticalPadding = spacingVars.none,
    horizontalPadding = spacingVars.base,
    maxWidth = '100%',
    className,
    children,
  } = props;

  return (
    <VStack
      fullWidth
      className={className}
      tag='section'
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
