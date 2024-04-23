
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globalStyle.module.css'

/* DEVEMOS IMPORTAR O AXIOS NO MAIN.JS */
import './api/axios.js'

const app = createApp(App)

app.use(router)

// renderiza a apagina
app.mount('#app')
