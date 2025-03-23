import { vi } from 'vitest';

// This is a minimal test setup file
// Set environment variables
process.env.VITE_API_URL = 'http://localhost:3001';

// Mock global fetch
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({}),
        ok: true
    })
); 