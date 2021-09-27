module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': 'off',
    'vue/comment-directive': 'off'
  }
}
