/*
 * This file configures the initialization of Sentry on the server.
 * The config you add here will be used whenever the server handles a request.
 * https://docs.sentry.io/platforms/javascript/guides/nextjs/
 */

import { init } from '@sentry/nextjs';

if (process.env.NODE_ENV === 'production') {
  init({
    dsn: 'https://a93a2a5dda7dd184d31c417f511da11f@o4508941540655104.ingest.de.sentry.io/4508941651673168',

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug:   false,
    enabled: process.env.NODE_ENV === 'production',
  });
}
