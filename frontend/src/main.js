import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router,axios)
app.mount('#app')
