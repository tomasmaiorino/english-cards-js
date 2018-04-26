const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode;
  console.log('environment ' + mode);
  const config = {
    mode: mode,
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index_bundle.js',
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
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader?url=false']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [{
            loader: 'file-loader',
            options: {
              name(file) {
                if (env === 'development') {
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
          { from: '/assets/img/*', to: '/dist/assets/img/', context: '/' }
        ], { debug: 'debug' })] : [new HtmlWebpackPlugin({
          template: './assets/index.html'
        })],
    devServer: {
      inline: true,
      port: 3000,
      host: "0.0.0.0"
    }
  }
  console.log("plugins length " + config.plugins.length);
  return config;
};
