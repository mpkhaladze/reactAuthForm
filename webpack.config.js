const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const rules = [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]",
                sourceMap: true,
                minimize: true
              }
            }
          ]
        }
      ]

const devServer = {
  compress: true,
  hot: false,
  noInfo: false,
  open: false,
  port: 3000,
  host: '0.0.0.0',
  useLocalIp: true,
  port: 3000
}

module.exports = {
  module: {
    rules:rules
  },
  devServer: devServer,
  plugins: [htmlWebpackPlugin]
};
