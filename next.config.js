/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.example.com',
            port: '',
            pathname: '/account123/**',
          },
          {
            hostname: 'static-01.daraz.pk',
          }
        ],
      },
}

module.exports = nextConfig

