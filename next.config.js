/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image: {
    domains: [
      "https://seekster-company.oss-ap-southeast-1.aliyuncs.com",
      "https://via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
