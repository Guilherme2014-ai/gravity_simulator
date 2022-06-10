/* eslint-disable @typescript-eslint/no-var-requires */
import path from "path";
import { merge } from "webpack-merge";
const common = require("./webpack.common.ts");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../../dist/client"),
    },
    hot: true,
  },
});
