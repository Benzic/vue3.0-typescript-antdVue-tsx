/*
 * @Author: your name
 * @Date: 2020-09-14 10:44:37
 * @LastEditTime: 2020-09-14 18:26:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-cli\src\main.ts
 */
import { createApp } from 'vue'
import { Button, message } from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
app.use(Button)
app.use(router)
app.config.globalProperties.$message = message;
app.mount('#app')
