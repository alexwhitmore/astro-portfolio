import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [preact(), react(), solid()]
});