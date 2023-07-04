/** @type {import("eslint").Linter.Config} */

module.exports = {
  plugins: ["@tanstack/query", "jest-dom"],

  extends: [
    "eslint-config-base",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:no-array-reduce/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:storybook/recommended",
  ],

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",

    "jsx-a11y/anchor-is-valid": ["off"],
  },

  overrides: [
    {
      files: ["ProcessEnv.d.ts"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": "off",
      },
    },
    {
      files: ["src/**/*.stories.*", "src/pages/**/*"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],

  // ESlint default behaviour ignores file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  ignorePatterns: [
    ".next",
    "build-next-static",
    "build-storybook-static",
    // Files bellow are not git ignored. Eslint fix in the making https://github.com/eslint/eslint/issues/15010
    "VersionInfo.ts",
    "next-env.d.ts",
  ],

  settings: {
    typescript: {},
    "import/resolver": {
      typescript: {
        project: [
          "client/apps/boilerplate-website/tsconfig.json",
          "client/apps/tracking/tsconfig.json",
          "packages/*/tsconfig.json",
        ],
      },
    },
    react: {
      version: "detect",
    },
  },
};
