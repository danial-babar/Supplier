/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'projects.microrage.com',
            pathname: '**',
          },
        ],
      },
  };

export default nextConfig;
