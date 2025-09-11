import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import 'regenerator-runtime/runtime';
import { TextEncoder, TextDecoder } from 'util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).__IS_DEV__ = true;

if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
    global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
}