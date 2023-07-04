/** @type {import("eslint").Linter.Config} */

module.exports = {
  env: {
    node: true,
    jest: true,
  },

  extends: ["eslint-config-base"],

  rules: {},

  settings: {
    typescript: {},
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
      typescript: {
        project: ["server/core/tsconfig.json", "packages/*/tsconfig.json"],
      },
    },
  },
};
