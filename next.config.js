/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CUSTOMER_ID: process.env.NEXT_PUBLIC_CUSTOMER_ID,
    NEXT_PUBLIC_TITLE: process.env.NEXT_PUBLIC_TITLE,
    NEXT_PUBLIC_DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION,
    NEXT_PUBLIC_MAIN_DOMAIN: process.env.NEXT_PUBLIC_MAIN_DOMAIN,
  }
}

module.exports = nextConfig
