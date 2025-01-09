import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';


createApp(App).use(router).use(LoadingPlugin, {
    color: '#c9c9c9',
    backgroundColor:'#242424',
    opacity:1,
    loader: 'dots',
}).mount('#app')

