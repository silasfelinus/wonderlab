import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './styles/main.scss';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import quasarUserOptions from './quasar-user-options';

const app = createApp(App);
app.use(store);
app.use(Quasar, quasarUserOptions);
app.mount('#app');