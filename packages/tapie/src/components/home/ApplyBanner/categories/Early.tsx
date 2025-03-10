import * as s from '@/components/home/ApplyBanner/style.css';

import {
  colorVars,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { Temporal } from '@js-temporal/polyfill';
import cn from 'classnames';
import { useEffect, useState } from 'react';

interface Props {
  name:    string;
  startAt: Temporal.PlainDateTime;
}

export default function ApplyBannerEarly(_props: Props) {
  const { startAt, name } = _props;
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
      className={cn(s.base, s.early)}
      justify={StackJustify.BETWEEN}
    >
      <VStack
        spacing={spacingVars.mini}
        align={StackAlign.START}
      >
        <Typo.Base
          color={colorVars.content.default}
          weight={Weight.SEMIBOLD}
        >{name}
        </Typo.Base>
        <Typo.Moderate
          color={colorVars.content.muted}
          weight={Weight.SEMIBOLD}
        >{formattedDate} - {`${timeLeft.hours}시간 ${timeLeft.minutes}분 ${timeLeft.seconds}초 남음`}
        </Typo.Moderate>
      </VStack>
    </HStack>
  );
}
