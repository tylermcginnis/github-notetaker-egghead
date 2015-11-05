var buildPath = require('path').join(__dirname, 'public');
module.exports = {
  entry: "./app/App.js",
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  devServer: {
    inline: true,
    progress: true,

    // parse host and port from env so this is easy
    // to customize
    host: process.env.HOST,
    port: process.env.PORT
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
      }
    ]
  }
};