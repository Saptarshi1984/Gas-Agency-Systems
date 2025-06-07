import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/GasAgency/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
});