/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages serves content from a subdirectory matching your repository name
  // e.g., username.github.io/repo-name
  // This ensures assets are loaded correctly
  basePath: process.env.NODE_ENV === 'production' ? '/Ethical-hacker-portfolio' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // This ensures trailing slashes are handled correctly
  trailingSlash: true,
};

export default nextConfig;
