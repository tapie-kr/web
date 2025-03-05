import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

/**
 * TAPIE 웹 프로젝트를 위한 Next.js 설정을 반환합니다.
 * @param {import('next').NextConfig} config
 * @returns
 */
export function withTAPIEWebConfig(config = {}) {
  const withVanillaExtract = createVanillaExtractPlugin();

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    ...config,

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
      AUTH_SERVICE: 'form',
      API_HOSTNAME: 'http://localhost:8765',
      API_VERSION:  'api/v1',
    },

    rewrites() {
      return [
        {
          source:      '/api/:path*',
          destination: `${this.env.NEXT_PUBLIC_API_URL}/:path*`,
        },
      ];
    },
  };

  return withVanillaExtract(nextConfig);
}
