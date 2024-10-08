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
  const service = axios.create({

  baseURL:

   process.env.NODE_ENV === 'dev'

      ? process.env.VUE_APP_DEV_API

      : process.env.VUE_APP_PRODUCTION_API,

  timeout: 10000

})
}


