// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
 base: '/reactvite/',  // Certifique-se de que está usando '/reactvite/'
  resolve: {
    alias: {
      '@services': '/src/services', // Alias para a pasta de services
    },
  },
});
