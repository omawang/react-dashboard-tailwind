module.exports = {
  env: {
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    semi: 0,
    'react/no-string-refs': 'off',
    'react/prop-types': 2,
    'next-line': 'off',
    'prettier/prettier': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 2, // Checks effect dependencies
  },
}
