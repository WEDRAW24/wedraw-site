/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // Serve the real site icon at /favicon.ico without using app/favicon.ico (Next
  // can replace or mishandle that filename). The asset lives in public/ only.
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/wedrawfavicon.ico" }];
  },
};

module.exports = nextConfig; 