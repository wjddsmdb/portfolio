// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // 👈 꼭 넣어야 함! 예: base: '/portfolio/'
});
