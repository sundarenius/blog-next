/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CUSTOMER_ID: process.env.CUSTOMER_ID,
    TITLE: process.env.TITLE,
    description: process.env.DESCRIPTION,
  }
}

module.exports = nextConfig
