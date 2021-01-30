const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        window: {},
      })
    );
    return config;
  },
};
