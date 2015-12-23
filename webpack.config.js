var path = require('path');
var buildPath = path.resolve(__dirname, 'public', 'build');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, 'src/index.js')
    ],
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.styl'],
    modulesDirectories: ['.', 'node_modules']
  },
  module: {
    loaders: [
      { test: /\.json?$/, loader: 'json' },
      { test: /.jsx?$/, exclude: /(node_modules|server.js)/, loader: "babel", query: { presets:['react','es2015'] } },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  },
};