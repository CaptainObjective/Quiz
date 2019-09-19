const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  mode: "production",
  resolve: {
    extensions: [".js"]
  }
};
