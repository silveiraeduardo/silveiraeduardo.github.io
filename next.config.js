const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  productionBrowserSourceMaps: isProd,
  basePath: isProd ? process.env.BASE_PATH : '',
  pwa: {
    dest: 'public',
    disable: !isProd,
    scope: process.env.BASE_PATH,
    register: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  webpack5: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? process.env.PUBLIC_URL : '',
};

module.exports = withPWA(withVanillaExtract(nextConfig));
