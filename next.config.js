/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CUSTOMER_ID: process.env.CUSTOMER_ID,
    TITLE: process.env.TITLE,
    DESCRIPTION: process.env.DESCRIPTION,
    MAIN_DOMAIN: process.env.MAIN_DOMAIN,
  }
}

module.exports = nextConfig
