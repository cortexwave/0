import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change 'cortex-wave' to your actual GitHub repository name
  base: '/cortex-wave/', 
  define: {
    // This allows process.env.API_KEY to work in the built app if you set it in your environment
    'process.env': process.env
  }
});