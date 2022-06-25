import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style';
import '@/svgs/loadSvg';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import CommonComponents from './components';
import usePlugins from '@/plugins';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

usePlugins(app);
app.use(Antd);
app.use(CommonComponents).use(ElementPlus).use(store).use(router).mount('#app');
