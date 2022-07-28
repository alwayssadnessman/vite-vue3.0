import { createApp } from 'vue';
import App from './App.tsx';
import Router from './router';
import 'element-plus/dist/index.css'
import "./assets/reset.scss";
const app = createApp(App)
app.use(Router)
app.mount('#app')
