const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths.js");
module.exports = {
  entry: path.join(paths.srcPath, "index.js"),

  output: {
    path: paths.outPath,
    filename: "bundle.js"
  },

  devtool: "source-map",
  devServer: {
    contentBase: paths.outPath,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: paths.srcPath,
        exclude: /node_modules/,
        options: {
          presets: [["es2015", { modules: false }], "react"],
          plugins: [
            [
              "import",
              { libraryName: "antd", libraryDirectory: "es", style: true }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.csv/,
        use: ["csv-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]"
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        SERVICE_ADDR: JSON.stringify(process.env.SERVICE_ADDR)
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(paths.srcPath, "index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
};
