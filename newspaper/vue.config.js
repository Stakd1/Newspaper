module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/search': {
        target: 'https://api.binstd.com/news',
        changeOrigin: true
      },
    }
  }
}
