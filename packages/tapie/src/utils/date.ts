import { type Temporal } from '@js-temporal/polyfill';

export function toDateString(date: Temporal.PlainDateTime): string {
  if (!date) {
    return '';
  }

  return date.toPlainDate().toString();
}
