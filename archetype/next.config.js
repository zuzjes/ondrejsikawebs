module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS(module.exports)
