import { Config } from "jest";

export const jestBase: Config = {
  preset: "ts-jest",
  coverageDirectory: "<rootDir>/tests/__coverage__/",
  coverageReporters: ["json", "text-summary", ["text", { skipFull: true }]],
  reporters: ["default", "jest-junit"],
};
