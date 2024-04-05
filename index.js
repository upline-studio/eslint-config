module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:compat/recommended',
  ],

  plugins: ['import', '@typescript-eslint', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-typed-object-prop': 'error',
    'vue/block-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    'vue/component-api-style': ['warn', ['script-setup']],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
      },
    ],
    "vue/html-button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": true
    }],
    "vue/match-component-file-name": ["error", {
      "extensions": ["vue"],
      "shouldMatchCase": false
    }],
    "vue/match-component-import-name": ["error"],
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/no-potential-component-option-typo": ["error", {
      "presets": ["all"]
    }],
    "vue/no-ref-object-reactivity-loss": ["error"],
    "vue/no-required-prop-with-default": ["error"],
    "vue/no-setup-props-reactivity-loss": ["error"],
    "vue/no-static-inline-styles": ["error"],
    "vue/no-unused-emit-declarations": ["error"],
    "vue/no-unused-properties": ["warn"],
    "vue/no-unused-refs": ["error"],
    "vue/no-useless-v-bind": ["error"],
    "vue/padding-line-between-blocks": ["error"],
    "vue/require-explicit-slots": ["warn"],
    "vue/require-expose": ["warn"],
    "vue/require-name-property": ["error"],
    "vue/require-typed-ref": ["warn"],
    "vue/v-for-delimiter-style": ["error", "in"],
  },
  "overrides": [
    {
      "files": ["**/*.vue"],
      "rules": {
        'import/prefer-default-export': 'warn',
        'import/no-default-export': 'off',
      }
    }
  ],
  settings: {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      }
    }
  },
};


