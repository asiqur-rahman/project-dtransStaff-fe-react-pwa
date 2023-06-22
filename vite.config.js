import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [
    mkcert(),
    react(),
    VitePWA({
      registerType: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.ico'],
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'DTrans',
        short_name: 'DTrans',
        description: 'Dtrans Staff',
        theme_color: '#ffffff',
        start_url: '/',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    })
  ],
})
