import { Temporal } from '@js-temporal/polyfill';

export function toDateString(date: Temporal.PlainDateTime): string {
  if (!date) {
    return '';
  }

  return date.toPlainDate().toString();
}

export function toTemporalDateTime(date: string): Temporal.PlainDateTime {
  if (!date) {
    return Temporal.PlainDateTime.from('2023-01-01T00:00:00');
  }

  // Remove the 'Z' designator if present before converting to PlainDateTime
  if (date.endsWith('Z')) {
    date = date.slice(0, -1);
  }

  return Temporal.PlainDateTime.from(date);
}
