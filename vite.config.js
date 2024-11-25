import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/AnishFolio/',
  define: {
    'process.env.PUBLIC_URL': JSON.stringify('/AnishFolio/')
  },
  server: {
    headers: { 'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.emailjs.com https://anish-16.github.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://anish-16.github.io; font-src 'self'; connect-src 'self' https://api.emailjs.com", },
  },
});
