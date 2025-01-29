import { defineConfig } from 'vitest/config';
import '@testing-library/jest-dom/vitest';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});