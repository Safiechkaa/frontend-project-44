import { defineFlatConfig } from "eslint-define-config";

export default defineFlatConfig([
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        console: "readonly" // Указание, что `console` является глобальной переменной
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
    },
  },
]);