module.exports = {
  env: {
      "browser": true,
      "es2021": true
  },
  extends: [
      "expo",
      "react-native",
      "next",
      "turbo",
      "prettier",
      "next/core-web-vitals",
      "prettier",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "react/react-in-jsx-scope": "off"
  },
};