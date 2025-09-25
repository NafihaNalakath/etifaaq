import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: './', // ✅ relative paths for custom domain
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
