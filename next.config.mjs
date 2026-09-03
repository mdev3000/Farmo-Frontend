import withPWAInit from "next-pwa"

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  allowedDevOrigins: ["localhost", "127.0.0.1", "api.farmo.in", "farmo.in","https://4648-49-248-175-214.ngrok-free.app"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.farmo.in",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "4648-49-248-175-214.ngrok-free.app ",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "4648-49-248-175-214.ngrok-free.app",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/**",
      }
    ]
  },
}

export default withPWA(nextConfig)
