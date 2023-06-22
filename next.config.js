/** @type {import('next').NextConfig} */
const nextConfig = {};

const path = require('path');

module.exports = {
  webpack: (config) => {
    // パスのエイリアスを追加する場合はここ
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@styles'] = path.join(__dirname, 'src', 'styles');
    config.resolve.alias['@libs'] = path.join(__dirname, 'src', 'libs');
    config.resolve.alias['@components'] = path.join(
      __dirname,
      'src',
      'components'
    );
    config.resolve.alias['@types'] = path.join(__dirname, 'src', 'types');
    return config;
  },
  images: {
    domains: ['images.microcms-assets.io', 'placehold.jp'],
  },
};
