import { Config } from "jest";

import { jestConfigJsdom } from "../config-jest";

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  modulePathIgnorePatterns: [
    "<rootDir>/src/createEmotionCache/index.ts",
    "<rootDir>/src/index.ts",
  ],
};

module.exports = jestConfig;
