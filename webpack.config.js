const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env, argv) { 
  return {
    plugins: env && env.development ? [
      new BundleAnalyzerPlugin() ] : []
    ,
    // devtool: argv.mode && argv.mode === 'development' ? "source-map" : "", // enum
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '[name].[ext]',
          }
        },
        {
          test: /\.pdf$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'pdf',
            name: '[name].[ext]',
          }
        },
          {
            test: /\.html$/i,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          },
          {
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
        
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