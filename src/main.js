import { createApp } from 'vue';
import { createStore } from 'vuex';
import VueDragResize from 'vue-drag-resize';
import WonderLab from './WonderLab.vue';

const app = createApp(WonderLab);
app.component('vue-drag-resize', VueDragResize);
app.mount('#app');