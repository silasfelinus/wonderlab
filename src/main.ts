import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './styles/main.scss';
import { Quasar } from 'quasar';
<<<<<<< HEAD
import QuasarUserOptions from './quasar-user-options' 
=======
import QuasarUserOptions from './quasar-user-options'
>>>>>>> 7e8d8d175b5cfb21f1b7a5cd2ce4c1d90989f672

const app = createApp(App);
app.use(store);
app.use(Quasar, QuasarUserOptions);
app.mount('#app');