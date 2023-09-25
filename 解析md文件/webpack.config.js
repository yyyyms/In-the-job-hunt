const { resolve } = require("path");
const MdToHtmlPlugin = require("./plugins/mdToHtml");
module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/app.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new MdToHtmlPlugin({
      template: resolve(__dirname, "test.md"),
      filename: "test.html",
    }),
  ],
};
