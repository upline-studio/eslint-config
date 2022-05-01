module.exports = {
  extends: [
      'airbnb-base',
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-recommended',
      'prettier',
      'plugin:compat/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  rules: {
    /**
     * Disable for tests and config file
     */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['webpack.mix.js', '**/*.test.js', '**/*.spec.js'],
      },
    ],

    /**
     * Rewrites airbnb, enable for of syntax
     */
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    /**
     * Rewrites airbnb, enable ++ in loops
     */
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],

    /**
     * Rewrites airbnb, prefer named import
     */
    'import/prefer-default-export': 'off',
    'import/no-default-export': 2,

    /**
     * To import ts files
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    /**
     * Don't import from parent dir (use ~ or @ instead)
     */
    'no-restricted-imports': [
      'error',
      {
        patterns: ['**/../*'],
      },
    ],
  },
  settings: {},
};


