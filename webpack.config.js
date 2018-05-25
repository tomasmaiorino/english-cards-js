const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode;
  console.log('environment ' + mode);
  const config = {
    mode: mode,
    entry: {
      index: './src/index.js',
      mdb: './assets/js/mdb.min.js',
      popper: './assets/js/popper.min.js'
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        mode != 'production' ? 
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader?url=false']
        } :
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract(
            'style-loader',
            combineLoaders([{
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }])
          )
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [{
            loader: 'file-loader',
            options: {
              name(file) {
                if (mode === 'production') {
                  return 'hash=sha512&digest=hex&name=[hash].[ext]'
                }
                return '[hash].[ext]'
              }
            }
          },
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ]
    },
    plugins:
      mode === 'production' ? [
        new HtmlWebpackPlugin({
          template: './assets/index.html'
        }),
        new CopyWebpackPlugin([
          { from: 'assets', to: 'assets/',toType:'dir', ignore: [ '*.html', '.js', '.css' ]}
        ], { debug: 'debug' }),
      new ExtractTextPlugin('styles.css')] : [new HtmlWebpackPlugin({
          template: './assets/index.html'
        })],
    devServer: {
      inline: true,
      port: 3000,
      host: "0.0.0.0"
    },
    
  }
  console.log("plugins length " + config.plugins.length);
  return config;
};
