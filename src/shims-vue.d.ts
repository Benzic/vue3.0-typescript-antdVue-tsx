/*
 * @Author: your name
 * @Date: 2020-09-14 10:44:37
 * @LastEditTime: 2020-09-14 16:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\shims-vue.d.ts
 */

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
