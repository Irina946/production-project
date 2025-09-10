import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    preset: 'ts-jest',                     // <-- для TS
    testEnvironment: 'jest-environment-jsdom', // <-- для jsdom
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: ["js","jsx","ts","tsx","json","node"],
    rootDir: path.resolve(__dirname, '../../'),
    roots: ["<rootDir>/src"],
    testMatch: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
    ],
};

export default config;
