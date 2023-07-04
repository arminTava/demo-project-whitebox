import { jestBase } from "config-jest";

module.exports = {
  ...jestBase,
  testEnvironment: "node",
  rootDir: ".",
  testMatch: ["**/?(*.)+(spec|test).ts", "**/*.integration.ts"],
  collectCoverageFrom: ["src/**/*.{ts,js}", "src/*.{ts,js}"],
  setupFiles: ["dotenv/config"],
  modulePathIgnorePatterns: [
    "<rootDir>/src/generated",
    "<rootDir>/src/main.ts",
  ],
  coveragePathIgnorePatterns: ["src/helpers/authUser.ts"],
};
