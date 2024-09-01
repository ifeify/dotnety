/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    reactStrictMode: false,
    experimental: {
      swcPlugins: [['fluentui-next-appdir-directive', { paths: ['@griffel', '@fluentui'] }]],
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  };
  
module.exports = nextConfig;