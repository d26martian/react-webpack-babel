const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATH = {
  src: path.join(__dirname, "./app/index.js"),
  dist: path.join(__dirname, "/dist")
};

module.exports = {
  externals: {
    path: PATH
  },
  entry: {
    app: PATH.src
  },
  output: {
    path: PATH.dist,
    filename: "index_webpack.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node-modules/",
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html"
    })
  ]
};
