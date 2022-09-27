const jsRules = {
  'lodash/prefer-constant': 0,
  'lodash/prefer-get': 0,
  'lodash/prefer-includes': 0,
  'lodash/prefer-is-nil': 0,
  'lodash/prefer-lodash-chain': 0,
  'lodash/prefer-lodash-method': 0,
  'lodash/prefer-lodash-typecheck': 0,
  'lodash/prefer-matches': 0,
  'lodash/prefer-noop': 0,
  'lodash/prefer-over-quantifier': 0,
  'lodash/prefer-some': 0,
  'lodash/prefer-startswith': 0,
  'lodash/prefer-times': 0,
  'prettier/prettier': 'error',
  'import/no-extraneous-dependencies': ['error'],
  'no-console': [
    'error',
    { allow: ['info', 'warn', 'error', 'debug', 'group', 'groupEnd'] },
  ],
  camelcase: ['warn', { properties: 'never', ignoreDestructuring: true }],
  curly: ['error', 'all'],
  'require-await': 'error',
  'no-await-in-loop': 'error',
  'no-unused-vars': 'off',
  'react/display-name': 'error',
  'react/forbid-component-props': ['warn', { forbid: ['style'] }],
  'react/jsx-no-undef': 0,
  'react/prefer-stateless-function': 'error',
  'react/prop-types': 'off',
  'jsx-a11y/no-autofocus': 'warn',
}

const tsRules = {
  ...jsRules,
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/ban-types': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true, enforceForJSX: true },
  ],
}
const jsImports = [
  'eslint:recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:jsx-a11y/recommended',
  'plugin:lodash/recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'prettier',
]
const tsImports = [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:import/warnings',
  'plugin:import/errors',
  'plugin:import/typescript',
  'plugin:jsx-a11y/recommended',
  'plugin:react-hooks/recommended',
  'plugin:react/recommended',
  'plugin:lodash/recommended',
  'prettier',
  'plugin:react/jsx-runtime',
]

module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: 'false',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // project: __dirname + '/tsconfig.json',
  },
  ignorePatterns: ['**/*.config.js', '**/gatsby-*.js'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/core-modules': ['use-composed-ref'],
  },
  overrides: [
    {
      /* Javascript files */
      files: ['**/*.js', '**/*.jsx'],
      plugins: ['prettier'],
      extends: jsImports,
      rules: jsRules,
    },
    {
      /* Typescript files */
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['prettier', 'react', 'jsx-a11y'],
      extends: tsImports,
      rules: tsRules,
    },
  ],
}
