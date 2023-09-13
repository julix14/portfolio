// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins:["~/plugins/fontawesome.js"],
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
    "@fortawesome/vue-fontawesome",
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-brands-svg-icons",
    ],
    },
});
