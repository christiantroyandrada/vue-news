import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { news_api_key } from './env'

const app = createApp(App)
app.config.globalProperties.$api_key = news_api_key
app.use(router)
app.use(store)

app.mount('#app')
