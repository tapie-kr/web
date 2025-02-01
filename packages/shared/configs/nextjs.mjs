import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

/**
 * TAPIE 웹 프로젝트를 위한 Next.js 설정을 반환합니다.
 * @param {import('next').NextConfig} config
 * @returns
 */
export function withTAPIEWebConfig(config = {}) {
  const withVanillaExtract = createVanillaExtractPlugin();

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

    ...config,
  };

  return withVanillaExtract(nextConfig);
}
