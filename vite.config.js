// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reactvite/', // Substitua 'reactvite' pelo nome do seu repositório
});
