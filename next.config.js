/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['(https://http2.mlstatic.com/)'],
    formats: ['image/avif', 'image/webp']
  }
  
}

module.exports = nextConfig
