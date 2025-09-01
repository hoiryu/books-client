import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	transpilePackages: ['msw'],
	images: {
		domains: ['picsum.photos'],
	},
};

export default nextConfig;
