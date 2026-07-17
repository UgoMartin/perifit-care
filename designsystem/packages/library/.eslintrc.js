module.exports = {
  root: true,
  ignorePatterns: ["lib/"],
  extends: ["@react-native", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    quotes: ["error", "double"],
    radix: ["error", "as-needed"],
    camelcase: ["error", { properties: "never", ignoreDestructuring: true }],
    "comma-dangle": ["error", "always-multiline"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "function-paren-newline": ["warn", "consistent"],
    "function-call-argument-newline": ["error", "consistent"],
    "max-len": [
      "error",
      {
        code: 200,
        ignoreUrls: true,
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "prettier/prettier": 0,
    "react-native/no-inline-styles": 0,
    complexity: ["error", 25],
    "consistent-return": "error",
    "no-unused-expressions": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-require-imports": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
      },
    },
    {
      files: ["**/*.tsx", "**/actions.ts", "**/styles.ts", "**/typography.ts"],
      rules: { "@typescript-eslint/explicit-function-return-type": "off" },
    },
  ],
};
