module.exports = {
  extends: "airbnb",
  env: {
    jest: true
  },
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
  }
};
