module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react']
        }
      }
    ]
  }
};
