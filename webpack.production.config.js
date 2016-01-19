const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const nib = require('nib');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: [
    path.join(__dirname, 'src/index.js'),
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      gtm: '<noscript><iframe src=\"//www.googletagmanager.com/ns.html?id=GTM-WDW6V4\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\"dataLayer\"?\"&l=\"+l:\"\";j.async=true;j.src=\"//www.googletagmanager.com/gtm.js?id=\"+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\"script\",\"dataLayer\",\"GTM-WDW6V4\");</script>',
    }),
    new ExtractTextPlugin('[name]-[hash].min.css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.styl', '.css'],
    modulesDirectories: ['.', 'node_modules'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', '!css-loader!stylus-loader'),
      },
      {
        test: /\.(jpg|png|gif|otf|eot|svg|ttf|woff\d?)$/,
        loaders: ['file-loader', 'image-webpack']
      },
    ],
  },

  stylus: {
    use: [nib()],
  },

};
