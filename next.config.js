/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  webpack(config) {
    config.resolve.modules = [__dirname, 'node_modules'];
    return config;
  },
};

module.exports = nextConfig;
