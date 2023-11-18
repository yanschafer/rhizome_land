import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Vue3Autocounter from 'vue3-autocounter';
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)
import Vue3Marquee from 'vue3-marquee'
import store from '@/store'

app.use(router).use(store).use(Vue3Marquee).use(Antd).use(gsap).component('vue3-autocounter', Vue3Autocounter).use(AOS)
gsap.registerPlugin(TextPlugin);

app.mount('#app')
