const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          prependData: `
          @import "@/assets/styles/variables.scss";
        `,
        }
      },
    },
  },
})

