const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
  },
  mode: "development",
  devServer: {
    static: {
      directory: "./public",
    },
    port: 8080,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": __dirname + "/src",
      modules: __dirname + "/node_modules",
    },
  },
  plugins: [new MiniCSSExtractPlugin({ filename: "app.css" })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["transform-object-rest-spread"],
        },
      },
      {
        test: /\.woof|\.woff|\.woff2|\.ttf|\.eot|\.svg$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
        // use: [MiniCSSExtractPlugin.loader, "css-loader", "style-loader"],
      },
    ],
  },
};
