/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CUSTOMER_ID: process.env.NEXT_PUBLIC_CUSTOMER_ID,
    NEXT_PUBLIC_MAIN_DOMAIN: process.env.NEXT_PUBLIC_MAIN_DOMAIN,
  }
}

module.exports = nextConfig
