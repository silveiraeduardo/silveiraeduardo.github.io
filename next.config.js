const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' eduardosilveira.com googletagmanager.com;
  child-src eduardosilveira.com;
  style-src 'self' 'unsafe-inline' eduardosilveira.com;
  font-src 'self';
  img-src * 'self' data: https: http: ;
  frame-src 'self' googletagmanager.com;
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

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
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withPWA(withVanillaExtract(nextConfig));
