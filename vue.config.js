module.exports = {
  css: {
    loaderOptions: {

      sass: {
        prependData: `@import "@/assets/style/mian.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // rewrite path
          // '^/api/old-path'
        },
      }
    }
  }
}
