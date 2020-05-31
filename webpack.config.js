var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: (loader) => [new require("autoprefixer")()],
              },
            },
          ],
        }),
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new ExtractTextPlugin("style.css")],
};
