var webpack = require('webpack');
var path = require('path');
module.exports = {
        entry: __dirname + '/react_client/src/index.jsx',
        module: {
          rules: [
            {
              test: /\.s?css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'babel-loader',
                  query: {
                    presets: ['airbnb'],
                  },
                },
              ],
            },
            {
              test: /\.jsx$/,
              use: [
                {
                  loader: 'babel-loader',
                  query: {
                    presets: ['airbnb'],
                  },
                },
              ],
            },
          ],
        },
        output: {
          filename: 'bundle.js',
          path: __dirname + '/react_client/dist'
        }
   };