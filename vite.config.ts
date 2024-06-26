import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    exclude: ['*.config.js'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true
    }
  }
});
