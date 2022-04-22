module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["vue", "html", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": "off",
  },
};
