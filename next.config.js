/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: false,
    register: true,
    skipWaiting: true,
    scope: '/',
    sw: 'sw.js',
  },
  
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com','dummyimage.com'],
  },
})

module.exports = nextConfig;
