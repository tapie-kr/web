import * as s from '@/components/home/ApplyBanner/style.css';

import {
  Box,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';

export default function ApplyBannerEarly() {
  return (
    <HStack
      fullWidth
      spacing={spacingVars.base}
      className={s.base}
    >
      <Box className={s.applyDateBox}>
        <Typo.Petite
          color={colorVars.content.inverted.default}
          weight={Weight.SEMIBOLD}
        >신청기간 - 04월 02일 08시
        </Typo.Petite>
      </Box>
      <Typo.Base
        color={colorVars.content.inverted.default}
        weight={Weight.MEDIUM}
      >
        아직 신청기간이 아닙니다.
      </Typo.Base>
      <Icon
        name={GlyphIcon.ARROW_FORWARD}
        color={colorVars.content.inverted.default}
      />
    </HStack>
  );
}
