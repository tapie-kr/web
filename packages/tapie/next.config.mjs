import { withSentryConfig } from '@sentry/nextjs';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

    config.module.rules.push({
      ...fileLoaderRule,
      test:          /\.svg$/i,
      resourceQuery: /url/,
    },
    {
      test:          /\.svg$/i,
      issuer:        fileLoaderRule.issuer,
      resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
      use:           ['@svgr/webpack'],
    });

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  typescript: { ignoreBuildErrors: true },

  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL || 'https://tapie-api-dev.vport.dev',
    AUTH_SERVICE:               'form',
    AUTH_URL:                   process.env.AUTH_URL || 'http://localhost:9876',
    API_HOSTNAME:               process.env.API_HOSTNAME || 'http://localhost:8765',
    API_VERSION:                process.env.API_VERSION || 'api/v1',
    NEXT_PUBLIC_API_URL_SECOND: process.env.NEXT_PUBLIC_API_URL_SECOND || 'https://texas-subdivision-implications-code.trycloudflare.com/',
  },

  rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [];
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tapie-api-dev.vport.dev';

    return [
      {
        source:      '/api/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
};

/*
 * Apply vanilla-extract first (innermost), then Sentry (outermost)
 * Sentry must be the outermost wrapper to properly intercept errors
 */
export default withSentryConfig(withVanillaExtract(nextConfig), {

  /*
   * For all available options, see:
   * https://www.npmjs.com/package/@sentry/webpack-plugin#options
   */

  org:     'tapie-ne',
  project: 'tapie-web',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  /*
   * For all available options, see:
   * https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
   */

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: { enabled: true },

  /*
   * Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
   * This can increase your server load as well as your hosting bill.
   * Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
   * side errors will fail.
   */
  tunnelRoute: '/monitoring',

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  /*
   * Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
   * See the following for more information:
   * https://docs.sentry.io/product/crons/
   * https://vercel.com/docs/cron-jobs
   */
  automaticVercelMonitors: true,
});
