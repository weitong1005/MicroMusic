import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'
import router from "./router";

import { createPinia } from 'pinia'
import i18n from "./locales";


const app = createApp(App)

/**
 * 注册路由
 * 集成pinia
 * 集成i18n国际化
 */
app.use(router).use(createPinia()).use(i18n)


app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
