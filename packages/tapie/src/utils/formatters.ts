interface CountdownTime {
  days:    number;
  hours:   number;
  minutes: number;
  seconds: number;
}

/**
 * Formats countdown time into a readable string
 */
export function formatCountdown({
  days,
  hours,
  minutes,
  seconds,
}: CountdownTime): string {
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  if (days > 0) {
    return `${days}일 ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
