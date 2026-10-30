import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, loaderContext) => {
          if (loaderContext.endsWith('_variables.scss')) {
            return content;
          }
          return `@use "@/styles/variables" as *;\n${content}`;
        },
      },
    },
  },
});
