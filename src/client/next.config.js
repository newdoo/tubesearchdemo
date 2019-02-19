const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const paths = require('./paths')
const withImages = require('next-images')


module.exports = withCSS(withSass(withImages({
  distDir: "../../.next",
  sassLoaderOptions: {
    includePaths: [paths.globalStyles]
  },
})))