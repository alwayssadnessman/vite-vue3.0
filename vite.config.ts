import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  resolve: {
    alias: [
      //配置别名
      { find: "@", replacement: resolve(__dirname, "src") },
    ],
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/common.scss";'
      }
    }
  }
});
