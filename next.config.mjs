/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '165.73.252.160',
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
// http://165.73.252.160/manage/resources/uploads/lead_images/featured_img_1716375769.jpg