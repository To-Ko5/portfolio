import { NuxtConfig } from '@nuxt/types'
import colors from 'vuetify/es5/util/colors'

const nuxtConfig: NuxtConfig = {
  ssr: true,
  /*
   ** Headers of the page
   */
  env: {
    CTF_SPACE_ID: process.env.API_SPACE_ID || '',
    CTF_CDA_ACCESS_TOKEN: process.env.API_CDA_ACCESS_TOKEN || ''
  },

  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s | ' + 'C-Portfolio',
    title: 'C-Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "C's Portfolio"
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'C-Portfolio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.ORGIN_URL || ''
      },
      { hid: 'og:title', property: 'og:title', content: 'C-Portfolio' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "C's Portfolio"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.ORGIN_URL + '/main_ogp.jpg'
      },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1976D2' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/fonts.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vee_validate.js' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-gtag',
    '@nuxtjs/google-fonts',
    'nuxt-purgecss'
  ],
  /*
   ** googleAnalytics module configuration
   ** See https://www.npmjs.com/package/@nuxtjs/google-gtag
   */
  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: false
  },
  /*
  古いアナリティクスの設定
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
   */
  /*
   ** @nuxtjs/google-fonts configuration
   */
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      download: true,
      inject: true
    }
  },
  /*
   ** nuxt-purgecss configuration
   */
  purgeCSS: {
    enabled: true,
    paths: ['node_modules/vuetify/src/**/*.ts'],
    whitelist: ['v-application', 'v-application--wrap', 'layout', 'row', 'col'],
    whitelistPatterns: [
      /^v-((?!application).)*$/,
      /^theme--*/,
      /.*-transition/,
      /^justify-*/,
      /^p*-[0-9]/,
      /^m*-auto/,
      /^m*-[0-9]/,
      /^p*-auto/,
      /^text--*/,
      /--text$/,
      /^row-*/,
      /^col-*/,
      /^d-*/
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxt/image'
  ],
  /*
   ** @nuxt/image configuration
   */
  image: {
    provider: 'contentful',
    contentful: {
      baseURL: 'https://images.ctfassets.net'
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    defaultAssets: {
      font: false,
      icons: 'mdiSvg'
    }
  },
  /*
   ** markdownit module configuration
   ** https://github.com/nuxt-community/modules/tree/master/packages/markdownit
   */
  markdownit: {
    html: true,
    injected: true,
    linkify: true,
    breaks: true
  },
  /*
   ** @nuxtjs/pwa Configuration
   ** https://github.com/nuxt-community/pwa-module
   */
  manifest: {
    name: 'C-Portfolio',
    lang: 'ja',
    short_name: 'C-Portfolio',
    title: 'C-Portfolio',
    'og:title': 'C-Portfolio',
    description: process.env.npm_package_description,
    'og:description': process.env.npm_package_description,
    theme_color: '#212121',
    background_color: '#212121'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['vee-validate'],
    extend(config, ctx) {}
  }
}

export default nuxtConfig
