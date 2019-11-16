const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
// entry 就是默认打包的路径, output 就是生成翻译后的文件，__dirname 当前目录下的 bundle 文件夹中的 bundle.js
module.exports = {
  mode: 'production',
  entry: {
    main: './index.js'
  },
  devServer: {
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modeule: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  output: {
    publicPath: 'http://cdn.com.cn', // 静态资源放到cdn中
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  }
}

