import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './styles/main.scss';
import { Quasar } from 'quasar';
import QuasarUserOptions from './quasar-user-options';

const app = createApp(App);
app.use(store);
app.use(Quasar, QuasarUserOptions);
app.mount('#app');