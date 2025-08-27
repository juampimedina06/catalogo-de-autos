import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Esto es opcional pero útil para que VSCode autocomplete y te tire errores si algo está mal
import type { UserConfig } from 'vite';

export default defineConfig((): UserConfig => ({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
