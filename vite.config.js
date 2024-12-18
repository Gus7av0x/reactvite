// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
 
  resolve: {
    alias: {
      '@services': '/src/services', // Alias para a pasta de services
    },
  },
});
