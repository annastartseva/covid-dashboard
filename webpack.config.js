const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    }
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ["webpack-dev-server/client?http://localhost:8080/", '@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    optimization: optimization(),
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      port: 8080,
      hot: isDev,
      open: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
              collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src/assets/'),
              to: path.resolve(__dirname, 'dist/assets/')
            }
          ]
        }),
        new MiniCssExtractPlugin({
          filename: filename('css')
        }),
        new ESLintPlugin()
    ],
    module: {
        rules: [
          {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                }, 
                'css-loader'
              ]
          },
          {
              test: /\.(png|jpg|jpeg|svg|gif)$/,
              use: ['file-loader']
          },
          {
              test: /\.(ttf|woff|woff2|eot)$/,
              use: ['file-loader']
          },
          {
            test: /\.mp3$/,
            use: ['file-loader']
          },
          {
              test: /\.xml$/,
              use: ['xml-loader']
          },
          {
              test: /\.csv$/,
              use: ['csv-loader']
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: jsLoaders()
          }    
        ]
    }
}