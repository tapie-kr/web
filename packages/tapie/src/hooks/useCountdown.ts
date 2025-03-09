import { Temporal } from '@js-temporal/polyfill';
import { useEffect, useState } from 'react';

interface CountdownTime {
  days:      number;
  hours:     number;
  minutes:   number;
  seconds:   number;
  isExpired: boolean;
}

export function useCountdown(endAt: Temporal.PlainDateTime): CountdownTime {
  const [remainingTime, setRemainingTime] = useState<CountdownTime>({
    days:      0,
    hours:     0,
    minutes:   0,
    seconds:   0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = Temporal.Now.plainDateTimeISO();

      // Check if deadline has passed
      if (now.toPlainDate().until(endAt.toPlainDate()).days < 0) {
        setRemainingTime({
          days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true,
        });

        return;
      }

      // Calculate remaining time components
      let seconds = endAt.second - now.second;
      let minutes = endAt.minute - now.minute;
      let hours = endAt.hour - now.hour;
      let days = 0;

      // Calculate days
      try {
        days = now.toPlainDate().until(endAt.toPlainDate()).days;
      } catch (_) {
        days = 0;
      }

      // Handle negative values
      if (seconds < 0) {
        seconds += 60;

        minutes -= 1;
      }

      if (minutes < 0) {
        minutes += 60;

        hours -= 1;
      }

      if (hours < 0) {
        hours += 24;

        days -= 1;
      }

      setRemainingTime({
        days, hours, minutes, seconds, isExpired: false,
      });
    };

    // Initial calculation
    calculateRemainingTime();

    // Update countdown every second
    const intervalId = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [endAt]);

  return remainingTime;
}
