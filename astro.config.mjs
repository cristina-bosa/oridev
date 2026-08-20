// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "FunnelDisplay",
      cssVariable: "--font-funnel-display",
      options: {
        variants: [
          {
            src: ["./public/fonts/FunnelDisplay.woff"],
            weight: "500",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "FunnelSans",
      cssVariable: "--font-funnel-sans",
      options: {
        variants: [
          {
            src: ["./public/fonts/FunnelSans.woff"],
            weight: "500",
            style: "normal",
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});