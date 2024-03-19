/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.nyt.com",
      },
    ],
  },
};

export default nextConfig;
