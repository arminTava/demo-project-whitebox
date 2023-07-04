import { Config } from "jest";

import { jestBase } from "./jest.config.base";

export const jestConfigJsdom: Config = {
  ...jestBase,
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/"],
  modulePaths: ["<rootDir>/src/"],
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.test.json" }],
  },
};
