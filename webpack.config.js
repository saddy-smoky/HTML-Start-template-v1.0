const path = require("path");

module.exports = {
  //mode: "production",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "main.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./src/assets/js")],
        loader: "babel-loader"
      }
    ]
  }
};
