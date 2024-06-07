/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'projects.microrage.com',
          pathname: '**',
        },
        {
          protocol: 'http',
          hostname: 'manage.mowarrd.sa',
          pathname: '**',
        },
      ],
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
};

export default nextConfig;
