/** @type {import('next').NextConfig} */
const nextConfig = {
  // pdf ashiglah ued hiiw
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
