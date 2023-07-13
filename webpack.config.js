const path = require("path");

module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
    },
    nav: {
      import: "./src/nav.js",
    },
    homepage: {
      import: "./src/homepage.js",
    },
    menu: {
      import: "./src/menu.js",
    },
    contact: {
      import: "./src/contact.js",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),

    // removes the unused codes from the 'dist' folder
    // clean: true,
  },
  // helps in debugging by pointing out the line where error has occured in the source code, rather than the bundled code
  devtool: "inline-source-map",
  devServer: { contentBase: "./dist", hot: true, open: true },
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
