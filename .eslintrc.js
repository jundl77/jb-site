module.exports = {
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  "env": {
    "amd": true,
    "browser": true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'rules': {
    "react/react-in-jsx-scope": "off",
    'max-len': [2, 125, 4, {ignoreComments: true, ignoreUrls: true}],
    'new-cap': ['error', { 'capIsNew': false }],
    'semi': ['error', 'never']
  }
}