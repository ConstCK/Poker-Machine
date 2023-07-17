const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "My title",
      template: "./src/index.html",
      favicon: "./src/assets/images/Spades.png",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|mp3)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
  },
};
