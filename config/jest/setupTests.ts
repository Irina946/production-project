import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals"
import "regenerator-runtime/runtime"
// Глобальный флаг окружения для тестов
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).__IS_DEV__ = true;