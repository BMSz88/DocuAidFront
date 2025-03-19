import '@testing-library/jest-dom'
import { expect, afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

// Define global fetch
global.fetch = vi.fn()

// Setup import.meta.env for tests
if (typeof import.meta === 'undefined') {
    global.import = { meta: { env: {} } }
}
import.meta = import.meta || {}
import.meta.env = import.meta.env || {}
import.meta.env.VITE_API_URL = 'http://localhost:3001'

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