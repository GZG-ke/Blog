import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    AutoImport({resolvers: [ElementPlusResolver()],
    }),
    Components({resolvers: [ElementPlusResolver()],
    })],
  resolve: {
  // 设置文件./src路径为 @
  alias: [
    {
      find: '@',
      replacement: resolve(__dirname, './src')
    }
  ]
}

})
