/** @type {import("eslint").Linter.Config} */

module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "testing-library", "jest", "import"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],

  rules: {
    "jest/prefer-expect-assertions": [
      "error",
      { onlyFunctionsWithAsyncKeyword: false },
    ],
    "prefer-template": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "spaced-comment": "error",
    "id-length": ["error", { min: 2, properties: "never" }],

    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-expect-error": "allow-with-description" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",

    "jest/valid-title": [
      "error",
      {
        mustMatch: {
          it: [
            /should.*when/u.source,
            "Test title must include 'should' and 'when'",
          ],
        },
      },
    ],

    "import/no-default-export": "error",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },

  // ESlint default behaviour ignores file/folders starting with "." - https://github.com/eslint/eslint/issues/10341
  ignorePatterns: ["!.*", "node_modules", ".turbo", "dist", "compiled"],

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};
