import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import solid from '@astrojs/solid-js';

export default defineConfig({
  adapter: netlify(),
  integrations: [solid()],
});
