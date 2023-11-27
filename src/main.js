import { createApp } from "vue";
import './style.css'
import App from './App.vue'
import router from './routes/router.js';
import '@fortawesome/fontawesome-free/js/all'

const app = createApp(App)
app.use(router)
app.mount('#app')

