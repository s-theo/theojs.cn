import tailwindcss from "@tailwindcss/vite";
import umami from "@yeskunall/astro-umami";
import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
const integrations: AstroIntegration[] = [];

if (env.ASTRO_UMAMI_WEBSITE_ID && env.ASTRO_UMAMI_ENDPOINT_URL && env.ASTRO_UMAMI_DOMAIN) {
  integrations.push(
    umami({
      id: env.ASTRO_UMAMI_WEBSITE_ID,
      endpointUrl: env.ASTRO_UMAMI_ENDPOINT_URL,
      domains: [env.ASTRO_UMAMI_DOMAIN],
    }),
  );
}

export default defineConfig({
  site: "https://theojs.cn",
  output: "static",
  integrations,
  vite: {
    plugins: [tailwindcss()],
  },
});
