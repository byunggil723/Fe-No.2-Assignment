module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
    'react/prop-types': 'off', // prop-types 안 쓸 경우 끄기
    semi: ['error', 'always'], // 세미클론 강제
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
