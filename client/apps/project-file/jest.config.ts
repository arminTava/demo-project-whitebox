import { Config } from "jest";
import nextJest from "next/jest";

import { jestConfigJsdom } from "../../../packages/config-jest";

const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig: Config = {
  ...jestConfigJsdom,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.stories.tsx"],
  coveragePathIgnorePatterns: [
    "src/pages/.*.tsx",
    "src/modules/index.ts",
    "src/gql",
    "src/graphql-requests",
    "src/assets",
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  setupFiles: ["<rootDir>/tests/setEnvVars.js"],
};

module.exports = createJestConfig(jestConfig);
