import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './routes';
import Pinia from './store';
import Icon from './components/Icon.vue';
import ButtonTab from './components/ButtonTab.vue';
import 'virtual:svg-icons-register'

const app = createApp(App);

app.component('Icon', Icon);
app.component('ButtonTab', ButtonTab);

app.use(Pinia);
app.use(Router);

app.mount('#app');
