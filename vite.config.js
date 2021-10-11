import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vitePluginString from 'vite-plugin-string'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(),vitePluginString(),WindiCSS()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/style/mixin";`
      }
    }
  }
})
