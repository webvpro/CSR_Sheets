module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parse: {
      ts: "@typescript-eslint/parser",
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["vue", "html", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": "off",
    "no-unused-vars": "off",
  },
};
