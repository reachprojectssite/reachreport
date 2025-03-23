/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prompt-stack.sshh.io',
        pathname: '/api/mocks/images/**',
      },
      {
        protocol: 'https',
        hostname: 'sparkstack.app',
        pathname: '/api/mocks/images/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bu.edu',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },

  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },

  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },

  reactStrictMode: process.env.NODE_ENV === 'development' ? false : true,

  experimental: {
    largePageDataBytes: 128 * 100000,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: '*' },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
    ]
  },

  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.performance = {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      }
    }
    
    // Add image optimization
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide-icons',
              chunks: 'all',
              priority: 20,
            },
          },
        },
      }
    }
    
    return config
  },
}

export default nextConfig