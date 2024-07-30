/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "pbs.twimg.com",
          },
        ],
      },
      experimental: {
        serverActions: true,
      },

};

export default nextConfig;

//pbs.twimg.com