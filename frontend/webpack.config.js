const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        type: "asset/resource",
      },
      {
        test: /\.jpg/,
        type: "asset/resource",
        generator: {
          filename: "cross-sell-dbase/img/[name][ext]",
        },
      },
    ],
  },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js"],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CompressionPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    assetModuleFilename: "img/[name][ext]",
    // assetModuleFilename: 'assets/[name][ext]',
    path: path.resolve(__dirname, "../"),
    publicPath: "auto",
    clean: false,
  },
};
