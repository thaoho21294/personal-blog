const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fs = require('fs')

const isDevelopment = process.env.NODE_ENV !== 'production'
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = () => {
  return {
    devServer: {
      port: 9000
    },
    mode: isDevelopment ? 'development' : 'production',
    output: {
      filename: isDevelopment ? '[name].js' : '[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: resolveApp('src'),
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: !isDevelopment
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: !isDevelopment }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: !isDevelopment
                },
                pngquant: {
                  quality: [0.5, 0.5],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                webp: {
                  quality: 75
                }
              }
            }
          ]
        }
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      })
    ]
  }
}
