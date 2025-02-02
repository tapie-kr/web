import { container } from './page.css';

import { AspectRatio, radiusVars, Skeleton, spacingVars, Stack, StackJustify, VStack } from '@tapie-kr/inspire-react';

export default function MembersDetailPage() {
  return (
    <Stack
      fullWidth
      className={container}
      spacing={spacingVars.medium}
      justify={StackJustify.CENTER}
    >
      <AspectRatio
        ratio={1}
        width={130}
      >
        <Skeleton
          fullWidth
          fullHeight
          borderRadius={radiusVars.full}
        />
      </AspectRatio>

      <VStack />
    </Stack>
  );
}
