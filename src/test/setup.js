import '@testing-library/jest-dom'
import { expect, afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

// Define global fetch and import.meta.env
global.fetch = vi.fn()
global.import = {
    meta: {
        env: {
            VITE_API_URL: 'http://localhost:3001'
        }
    }
}

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// Reset mocks before each test
beforeEach(() => {
    vi.resetAllMocks()
})

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup()
}) 