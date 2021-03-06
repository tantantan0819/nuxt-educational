module.exports = {

  // 配置header
  head: {
    title: 'education system',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // 配置应用的源码目录路径
  srcDir: 'src/',

  // 配置端口号
  server: {
    port: 8833, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },

  // 配置加载进度条颜色
  loading: {color: '#00d1a2'},

  dev: process.env.NODE_ENV === 'DEV',
  //css
  css:[
    { src: "swiper/dist/css/swiper.css" }
  ],
  //配置实例化之前需要运行的插件
  plugins: [
    {
      src: '~/plugins/element-ui',
      ssr: true,
    },
    { src: "~/plugins/swiper.js", ssr: false },
  ],
  // 构建配置
  build: {
    //将页面源代码中的css提取到link标签中去
    extractCSS: true,
    vendor: [
      'axios',
      '~/plugins/element-ui',
      '~/plugins/config',
      '~/plugins/crypto',
      '~/plugins/http',
      '~/plugins/token',
      '~/plugins/utils',
      '~/plugins/vaildate',
      '~/plugins/swiper',
      '~/plugins/touch',
    ],
    // 在保存时运行 ESLint
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
};

