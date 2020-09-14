import { createApp } from 'vue'
import { Button, message } from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import store from './store'
const app = createApp(App)
app.use(Button)
app.use(router)
app.use(store)
app.config.globalProperties.$message = message;
app.mount('#app')
