const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withImages(withSass({
  target: 'serverless',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[hash:base64:5]__[local]",
  },
}));
