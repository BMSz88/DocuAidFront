// This file is used to setup the jsdom environment for tests

// Setup global browser objects that might be missing in the test environment
global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
};

global.DOMRect = class DOMRect {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = y;
        this.right = x + width;
        this.bottom = y + height;
        this.left = x;
    }
    toJSON() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            left: this.left,
        };
    }
};

// Set up import.meta.env for tests
if (typeof import.meta === 'undefined') {
    global.import = { meta: { env: {} } };
}

if (typeof import.meta !== 'undefined') {
    import.meta.env = import.meta.env || {};
    import.meta.env.VITE_API_URL = 'http://localhost:3001';
} 