module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'no-extra-boolean-cast': 'off',
    'no-prototype-builtins': 'off',
    'max-lines': ['error', 150],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
          'object': false,
        },
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['**/*.feature'],
  overrides: [
    {
      files: ['**/generated/*', '**/*.test.ts'],
      rules: {
        'max-lines': 'off',
      },
    },
  ],
};
