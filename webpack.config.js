var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: ["./script.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dist.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,

        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.(html|jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },

  devServer: {
    inline: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  }
};

module.exports = config;
