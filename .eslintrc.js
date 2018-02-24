module.exports = {
  extends: "airbnb",
  env: {
    jest: true
  },
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "object-curly-newline": ["error", { "multiline": true }],
    "no-param-reassign": ["error", { "props": false }]
  }
};
