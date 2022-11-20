/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dlskits.com',
        port: '*',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
};
