
module.exports = {
  parser: "babel-eslint",
  "extends": "react-app",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "max-len": [1, 200, 2, { ignoreComments: true }],
    // "prop-types": [2],
    'no-console': ['warn'],
    //'linebreak-style': ['error', 'windows'],
    'linebreak-style': 0,
    quotes: ['warn', 'single'],
    semi: 0,
    'no-unused-vars': ['warn'],
    'no-console': ['warn'],
    'no-useless-escape': ['warn']
  }
}


