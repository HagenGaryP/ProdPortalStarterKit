const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // add optimization as needed.
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'source-map', // or 'inline-source-map', 'eval-source-map', etc...
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,   // Matches .js, .jsx, .ts, and .tsx files
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { "modules": false }],  // Transpile ES6+ to ES5
              '@babel/preset-react',   // Handle React JSX
              '@babel/preset-typescript' // Handle TypeScript
            ]
            // NOTE: The { "modules": false } option ensures that Babel doesn't transform ES6 modules, which is important for tree-shaking and HMR.
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    /** OPTIONAL HMR plugin - requires additional code in react entry */
    new webpack.HotModuleReplacementPlugin(), // might be redundant due to `hot: true` option in devServer
  ],
};
