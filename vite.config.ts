import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/etifaaq/',  // 👈 IMPORTANT: repo name here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});