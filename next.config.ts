import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGE_ICONS_HOSTNAME!,
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SANITY_IMAGES_HOSTNAME!,
      },
    ],
  },
};

export default withNextIntl(nextConfig);
