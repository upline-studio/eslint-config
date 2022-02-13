module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:compat/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['webpack.mix.js', '**/*.test.js', '**/*.spec.js'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 2,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
