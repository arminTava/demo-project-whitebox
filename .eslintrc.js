/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.lintstaged.json"],
  },

  extends: ["eslint-config-base"],
};
