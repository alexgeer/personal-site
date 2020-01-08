const path = require('path')

module.exports = {
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
         path: path.join(__dirname, 'src', 'dist')
       }
  };