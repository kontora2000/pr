
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Студия мебели Princess',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '', }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/_img/icons/fav/favicon.ico', }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/static/style.css', }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vHide', }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'gsap'
    ],
  },
}
