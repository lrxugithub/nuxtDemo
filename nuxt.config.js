const pkg = require('./package') //包装了项目基本信息的对象
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name, //process.env.npm_package_name || '',
    meta: [
      { name: 'renderer', content: 'webkit'},
			{ name: 'force-rendering', content: 'webkit'},
			{ 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
			{ charset: 'utf-8' },
			{ hid: 'description', name: 'description', content: ''},
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      // { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: pkg.description } //content: process.env.npm_package_description || ''
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
			{ src: 'https://wechatfe.github.io/vconsole/lib/vconsole.min.js?v=3.0.0.0' }
		]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/normalize.css',
    '~assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/elementUI', ssr: true },
    { src: "~/plugins/axios", ssr: false},
    { src: "~/plugins/rem", ssr: false},
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy:true,  //  代理
  },
  /*
  ** Build configuration
  */
  build: {
    loaders: {
      test:/\.(png|jpe?g|gif|svg)$/,
        loader:"url-loader",
        query:{
          limit:10000,
          name:'img/[name].[hash].[ext]'
        }
    },
    vendor: ['element-ui','axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
    // server: {
    //   port: 3000, // default: 3000
    //   host: '0.0.0.0', // default: localhost
    // }
  }
}
