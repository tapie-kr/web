import { loadingBase, loadingContentBase, rotatingIcon } from './style.css';

import {
  colorVars,
  GlyphIcon,
  Icon,
  spacingVars,
  Typo,
  VStack,
} from '@tapie-kr/inspire-react';

export default function ApplyLoading() {
  return (
    <VStack
      fullHeight
      fullWidth
      className={loadingBase}
    >
      <VStack
        className={loadingContentBase}
        spacing={spacingVars.petite}
      >
        <Icon
          name={GlyphIcon.REFRESH}
          size={30}
          className={rotatingIcon}
        />
        <Typo.Base color={colorVars.content.emphasized}>신청폼을 불러오는 중입니다...</Typo.Base>
      </VStack>

    </VStack>
  );
}
