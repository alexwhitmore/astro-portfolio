import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

export default defineConfig({
  adapter: netlify(),
  integrations: [preact(), react()],
});
