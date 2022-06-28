/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  "rules": {
    "endOfLine": "auto",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "no-confusing-arrow": "off",
    "linebreak-style": "off",
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "no-plusplus": "off"
  },
}
