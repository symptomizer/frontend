module.exports = {
  webpack: (webpack_config) => {
    webpack_config.resolve.extensions = [".js", ".ts"];
    return webpack_config;
  },
};
