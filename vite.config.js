import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  esbuild: {
    target: 'es2015',
    include: /\.(js|ts|jsx|tsx)$/,
  },
  build: {
    target: 'es2015',
    emptyOutDir: false, // Prevents deleting existing files
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Preferred over 'ie >= 11'
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});
