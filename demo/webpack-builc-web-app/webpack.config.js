const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  // mode: "production",
  // mode: "development",
  mode: "none",
  // 相对于package.json
  entry: "./src/index.js",
  output: {
    // 相对于webpack.config.js
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  },
};