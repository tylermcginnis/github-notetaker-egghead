module.exports = {
  entry: "./app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['react']
        }
      }
    ]
  }
};
