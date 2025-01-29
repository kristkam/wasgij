/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

(globalThis as any).describe = describe;
(globalThis as any).it = it;
(globalThis as any).expect = expect;

afterEach(() => {
    cleanup();
});