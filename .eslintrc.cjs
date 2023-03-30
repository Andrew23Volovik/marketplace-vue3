/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 120,
        singleQuote: true,
        semi: true,
        singleAttributePerLine: true,
      },
    ],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'vue/max-len': [
      'warn',
      {
        code: 120,
        template: 120,
        tabWidth: 2,
        comments: 120,
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/padding-line-between-tags': ['error', [{ blankLine: 'never', prev: '*', next: '*' }]],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
};
