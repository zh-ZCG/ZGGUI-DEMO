import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "zgg-ui/styles/transition.less";
        @import "zgg-ui/styles/ZCG.less";
        @import "zgg-ui/styles/ZCGStyle.less";
        `,
      },
    },
  },
})
