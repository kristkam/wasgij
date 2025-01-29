import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';


globalThis.describe = describe;
globalThis.it = it;
globalThis.expect = expect;

afterEach(() => {
    cleanup();
});