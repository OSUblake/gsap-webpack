
var path = require("path");
var webpack = require("webpack");

var root = __dirname;

var gsapPath = "/node_modules/gsap/src/uncompressed/";

module.exports = {
  watch: true,
  context: path.resolve(root, "app"),
  entry: "./app.js",

  output: {
    path: "build/js/",
    publicPath: "/wwwroot/js/",
    filename: "main.js"
  },

  devServer: {
    contentBase: "wwwroot"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      TweenMax: "gsap"
    })
  ],

  resolve: {

    extensions: ["", ".js"],

    alias: {
      "TweenLite": "gsap",
      "CSSPlugin": "gsap",
      "Draggable": path.join(root, gsapPath + "utils/Draggable.js"),
      "ScrollToPlugin": path.join(root, gsapPath + "plugins/ScrollToPlugin.js")
    }
  }
};