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

import { type Temporal } from '@js-temporal/polyfill';

interface Props {
  startAt: Temporal.PlainDateTime;
}

export default function ApplyBannerEarly(_props: Props) {
  const { startAt } = _props;
  const formattedDate = `${startAt.month.toString().padStart(2, '0')}월 ${startAt.day.toString().padStart(2, '0')}일 ${startAt.hour.toString().padStart(2, '0')}시`;

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
        >신청기간 - {formattedDate}
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
