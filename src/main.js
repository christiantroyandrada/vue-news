import { createApp } from 'vue'
import App from 'App'
import router from 'router'
import store from 'store/index'


const app = createApp(App)
app.use(store)
app.use(router)

router.isReady().then(() => {
    app.mount('#app')
})

//Vue News app using Vue 3 by Christian Troy Andrada