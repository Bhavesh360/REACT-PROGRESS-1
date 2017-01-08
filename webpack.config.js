var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: [
    './app/index.js' //webpack is going to thake this entry file and do some
                    //transformations to it that we specify and output it
                    //to where we specify which is /dist. :)
  ],
  output: {
    path: __dirname + '/dist', //dirname is root directory.
    filename: "index_bundle.js"
  },
  module: {
    loaders:[
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"} // babel transforms JSX components into normal JavaScript code.
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
