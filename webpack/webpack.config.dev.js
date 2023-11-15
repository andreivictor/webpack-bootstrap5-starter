const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.common');
const paths = require('./paths');

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: true,
    hot: true,
    watchFiles: [`${paths.src}/*.html`, `${paths.src}/images/**.*`],
    port: process.env.PORT || 8080,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  /* Additional plugins configuration */
  plugins: [],
});
