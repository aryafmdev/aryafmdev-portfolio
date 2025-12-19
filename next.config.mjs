import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: 'c:/Users/admin/Documents/my-project',
  },
};

export default withBundleAnalyzer(nextConfig);
