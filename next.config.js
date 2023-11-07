/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CUSTOMER_ID: process.env.CUSTOMER_ID,
  }
}

module.exports = nextConfig
