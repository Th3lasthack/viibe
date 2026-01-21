import type { NextConfig } from 'next'
import { withBotId } from 'botid/next/config'

const nextConfig: NextConfig = {
  serverExternalPackages: [
    '@remotion/bundler',
    '@remotion/renderer',
    '@remotion/cli',
  ],
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.md/,
      type: 'asset/source',
    })

    // Exclude Remotion from client bundle
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@remotion/bundler': false,
        '@remotion/renderer': false,
        '@remotion/cli': false,
      }
    }

    return config
  },
  turbopack: {
    rules: {
      '*.md': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.com',
        port: '',
        pathname: '/api/www/avatar/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default withBotId(nextConfig)
