const path = require("path");

module.exports = {
  entry: { app: path.join(__dirname, "..", "src", "index.tsx") },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".json"],
    alias: { "@": path.resolve(__dirname, "..", "src") },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["> 0.2% in KR, not dead"] },
                debug: true,
                modules: false,
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
            ["@babel/preset-react"],
            "@babel/preset-typescript",
          ],
          plugins: ["react-refresh/babel", "babel-plugin-styled-components"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
