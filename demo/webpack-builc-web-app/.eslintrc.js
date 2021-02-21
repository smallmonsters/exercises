module.exports = {
  parserOptions: {
    ecmaVersion: 8, //js版本
    sourceType: "module", //可以使用import/export语法
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
