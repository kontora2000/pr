module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", { //висящие запятые для объектов
      "arrays": "never",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never"
  }],
  "indent": ["error", 2],
  "no-else-return"   : 0, //позволить else после return
  "no-trailing-spaces":0, //позволить всиящие пробелы
  "consistent-return":0, //позволить функциям не возвращать значения
  "no-underscore-dangle":0, //разрешить нижний слэш в имени переменных
  "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": true, "peerDependencies": true}],
  "max-len":0
  }
}
