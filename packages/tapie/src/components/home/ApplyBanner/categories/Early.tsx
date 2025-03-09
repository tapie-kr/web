import * as s from '@/components/home/ApplyBanner/style.css';

import {
  Box,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { Temporal } from '@js-temporal/polyfill';
import { useEffect, useState } from 'react';

interface Props {
  startAt: Temporal.PlainDateTime;
}

export default function ApplyBannerEarly(_props: Props) {
  const { startAt } = _props;
  const formattedDate = `${startAt.month.toString().padStart(2, '0')}월 ${startAt.day.toString().padStart(2, '0')}일 ${startAt.hour.toString().padStart(2, '0')}시`;

  const [timeLeft, setTimeLeft] = useState({
    hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Temporal.Now.plainDateTimeISO();
      const diff = startAt.since(now);

      if (diff.sign === -1) {
        // If date has passed
        setTimeLeft({
          hours: 0, minutes: 0, seconds: 0,
        });

        return;
      }

      // Calculate hours, minutes, seconds
      const totalSeconds = Math.floor(diff.total('seconds'));
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        hours, minutes, seconds,
      });
    };

    calculateTimeLeft();

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [startAt]);

  return (
    <HStack
      fullWidth
      spacing={spacingVars.base}
      className={s.base}
    >
      <VStack spacing={spacingVars.tiny}>
        <VStack
          className={s.applyDateBox}
        >
          <Typo.Petite
            color={colorVars.content.inverted.default}
            weight={Weight.SEMIBOLD}
          >
            신청기간 -
            {' '}
            {formattedDate}
          </Typo.Petite>
        </VStack>
        <Box>
          <Typo.Micro
            color={colorVars.content.inverted.muted}
            weight={Weight.MEDIUM}
          >
            {`${timeLeft.hours}시간 ${timeLeft.minutes}분 ${timeLeft.seconds}초 남음`}
          </Typo.Micro>
        </Box>
      </VStack>
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
