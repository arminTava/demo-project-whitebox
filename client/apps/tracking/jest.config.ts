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
    "src/modules/HomePage/index.ts",
    "src/modules/Layout/index.tsx",
    "src/modules/Seo/index.tsx",
    "src/modules/Seo/helper.ts",
    "src/gql",
    "src/graphql-requests",
    "src/helper",
    "src/modules/OfferPage/components/Status/constants.ts",
    "src/modules/OrderTracking/ModalContent/index.tsx",
  ],
  setupFiles: ["<rootDir>/tests/setEnvVars.js"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};

module.exports = createJestConfig(jestConfig);
