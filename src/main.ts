import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './styles/main.scss';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

const app = createApp(App);
app.use(store);
app.use(Quasar);
app.mount('#app');