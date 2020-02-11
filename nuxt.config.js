const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Finme Cabinet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Finme Cabinet' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,900&amp;subset=cyrillic' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/globalComponents.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios'],
    ['@nuxtjs/style-resources'],
  ],
  styleResources: {
    scss: [
      'assets/scss/mobile.scss',
      'assets/scss/colors.scss',
      'assets/scss/spr.scss',
      'assets/scss/mixins.scss'
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // Sprite plugin
        let path = require('path');
        let SpritesmithPlugin = require('webpack-spritesmith');
        // Sprite map extension webpack configuration
        config.resolve.modules.push('./assets/img');  //  Where can css find sprite maps
        config.plugins.push(
          new SpritesmithPlugin({
              src: {
                  cwd: path.resolve(__dirname, './assets/img/spr/'), // Icon root path
                  glob: '**/*.png' // Match any png icon
              },
              target: {
                image: path.resolve(__dirname, './assets/img/spr.png'), // Generate a sprite map target path and name
                css: [
                  ['./assets/scss/spr.scss', { format: 'handlebars_based_template' }],
                ]
              },
              apiOptions: {
                  cssImageRef: "~assets/img/spr.png", // Relative position path configuration of the sprite map in the css file
              },
              spritesmithOptions: {
                algorithm: 'binary-tree',
                padding: 2,
              },
              customTemplates: {
                'handlebars_based_template': path.resolve(__dirname, './sprite.template.mustache'),
                'handlebars_based_template_retina': path.resolve(__dirname, './sprite.template.mustache')
              },
              retina: '@2x'
          })
        )
      }
    }
  }
}
