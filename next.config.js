const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withImages(withCss(withSass({
  target: 'serverless',
  //useFileSystemPublicRoutes: false,
  pageExtensions: ['jsx', 'js'],
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[hash:base64:5]__[local]",
  },
})));
