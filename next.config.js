/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com'],
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyCvXzlqDhHJ_Z2RID0QPEUeYrrD2zMAhlw",
    FIREBASE_AUTH_DOMAIN: "farmart-a0537.firebaseapp.com",
    FIREBASE_PROJECT_ID: "farmart-a0537",
    FIREBASE_STORAGE_BUCKET: 'farmart-a0537.appspot.com',
    FIREBASE_MESSINGSENDER_ID: "639206657365",
    FIREBASE_APP_ID: "1:639206657365:web:207b4b74a7e4f22f65b3dc"
  }
}

module.exports = nextConfig
