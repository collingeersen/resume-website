module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: {
    files: ['*.ts', '*.tsx'],
    extends: [
      "./tsconfig.json",
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: "tsconfig.json",
  },
  root: true,
};
