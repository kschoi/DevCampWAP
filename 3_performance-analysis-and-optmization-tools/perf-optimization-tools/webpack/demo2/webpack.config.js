var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
//   module: { //loader
//     rules: [{
//       test: /\.css$/,
//       use: ['style-loader', 'css-loader'] //css-loader: css가 javascript에 들어갈 수 있게, style-loader: 스타일 태그에 스타일을 넣어줌
//     }]
//   },
module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        "css-loader"
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}