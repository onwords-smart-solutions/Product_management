import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'CRM Web App',
        short_name: 'CRM',
        description: 'Customer Relationship Management',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'applogo1.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'applogo1.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      // No need to specify input for standard Vite React apps
    },
  },
  server: {
    historyApiFallback: true,
  },
});
