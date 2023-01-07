// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // General Options
  pages: true,

  css: ["~/assets/css/main.css"],
  // Modules:
  modules: ["@nuxtjs/tailwindcss"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ["~/components", "~/components/common"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
