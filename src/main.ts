import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
const app = createApp(App);

// mitt
import mitt from 'mitt';
const Mit = mitt();
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
  }
}

//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit;

// 全局组件
import Global from '@/components/Global.vue';
app.component('Global', Global);

app.use(createPinia());
app.use(router);
app.mount('#app');
