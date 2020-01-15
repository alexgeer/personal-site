const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env, argv) { 
  return {
    plugins: env && env.development ? [
      new BundleAnalyzerPlugin() ] : []
    ,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    resolve: {
        extensions: ['.mjs','.js', '.jsx']
    },
    output: {
         path: path.join(__dirname, 'dist'),
         chunkFilename: '[name].bundle.js',
       }
  }
};