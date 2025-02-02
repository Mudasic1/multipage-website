import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Initialize the path information
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a new compat instance to support extending ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Adding rules to disable
  {
    rules: {
      // Disable unescaped entities warning
      "react/no-unescaped-entities": "off",

      // Disable unused variable warning
      "@typescript-eslint/no-unused-vars": "off",

      // Disable explicit any type warning
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
