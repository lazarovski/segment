/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com']
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["mk", "sq"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "mk",
  },
}

module.exports = nextConfig
