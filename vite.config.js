import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vite.dev/config/
// https://github.com/vitejs/vite/discussions/10519
export default defineConfig({
  esbuild: {
    target: 'es2015',
    include: /\.(ts|jsx|tsx)$/,
  },
  build: {
    target: 'es2015',
  },
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
    react(),
  ],
});
