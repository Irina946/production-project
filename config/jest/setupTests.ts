import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import 'regenerator-runtime/runtime';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).__IS_DEV__ = true;

if (typeof global.TextEncoder === 'undefined') {
    const { TextEncoder, TextDecoder } = require('util');
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}