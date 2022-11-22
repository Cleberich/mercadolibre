/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['(http://http2.mlstatic.com/)'],
    formats: ['image/avif', 'image/webp']
  },
    compress: true,
  
}

module.exports = nextConfig
