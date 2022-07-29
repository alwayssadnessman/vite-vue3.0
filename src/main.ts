import { createApp } from 'vue';
import App from './App.tsx';
import Router from './router';
import 'element-plus/dist/index.css'
import "./assets/reset.scss";
import Menu from '@/layout/Menu/Index.vue';
const app = createApp(App)
app.component('Menu',Menu)
app.use(Router)
app.mount('#app')
