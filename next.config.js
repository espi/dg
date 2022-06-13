/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');


const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig

module.exports = withPlugins([
  [optimizedImages, {
    images: {
      loader: 'akamai',
      path: '',
    },  
  }],
  
  nextConfig,
  // your other plugins here

]);
