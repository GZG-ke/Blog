import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import { setupRouter } from '@/router';
import i18n from '@/locales/index';
import Ant from "ant-design-vue";
import 'ant-design-vue/dist/reset.css';

setupRouter(app);
app.use(Ant)
app.use(i18n);
app.mount('#app');
