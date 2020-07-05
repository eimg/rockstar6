const path = require("path");

module.exports = {
  entry: "./src/App.js",
  output: {
    path: path.join(__dirname, "/js"),
    filename: "js/App.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  }
};
