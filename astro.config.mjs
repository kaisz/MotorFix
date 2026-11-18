// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: https://kaisz.github.io/MotorFix
export default defineConfig({
  site: "https://kaisz.github.io",
  base: "/MotorFix/",
  output: "static",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
