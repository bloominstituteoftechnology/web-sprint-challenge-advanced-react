const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const DEVELOPMENT = 'development'
const ENV = process.env.NODE_ENV || DEVELOPMENT
const IS_DEV = ENV === DEVELOPMENT

const HTML_LOADER = 'html-loader'
const STYLE_LOADER = 'style-loader'
const CSS_LOADER = 'css-loader'
const BABEL_LOADER = 'babel-loader'
const STRING_REPLACE_LOADER = 'string-replace-loader'

const SERVER_URL = /http:\/\/localhost:9000/g
const FRONTEND_PORT = 3000

const INDEX_HTML_PATH = './frontend/index.html'
const INDEX_JS_PATH = './frontend/index.js'
const DIST_FOLDER = 'dist'
const BUNDLE_FILE = 'index.js'

const SOURCE_MAP = IS_DEV ? 'source-map' : false

const config = {
  entry: INDEX_JS_PATH,
  mode: ENV,
  output: {
    filename: BUNDLE_FILE,
    publicPath: '/',
    path: path.resolve(__dirname, DIST_FOLDER),
  },
  devtool: SOURCE_MAP,
  plugins: [
    new HtmlWebpackPlugin({
      template: INDEX_HTML_PATH,
    }),
  ],
  devServer: {
    static: path.join(__dirname, DIST_FOLDER),
    historyApiFallback: true,
    compress: true,
    port: FRONTEND_PORT,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: { loader: HTML_LOADER }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: BABEL_LOADER },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          STYLE_LOADER,
          CSS_LOADER,
        ],
      },
    ],
  },
}

if (!IS_DEV) {
  config.module.rules.push({
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: STRING_REPLACE_LOADER,
      options: {
        search: SERVER_URL,
        replace: '',
      },
    },
  })
}

module.exports = config
