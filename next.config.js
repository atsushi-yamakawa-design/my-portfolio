/** @type {import('next').NextConfig} */
const nextConfig = {};

const path = require('path');

module.exports = {
  webpack: (config) => {
    // パスのエイリアスを追加する場合はここ
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@styles'] = path.join(__dirname, 'src', 'styles');
    return config;
  },
};
