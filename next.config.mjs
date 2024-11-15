/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "strapi-app-rtmr.onrender.com",
        // port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: "localhost",
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'http',
//           hostname: "localhost",
//           port: '1337',
//           pathname: '/uploads/*',
//         },
//       ],
//     },
//   }