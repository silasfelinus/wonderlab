import { createApp } from 'vue';
import Vue from 'vue';
import VueDragResize from 'vue-drag-resize';
import WonderLab from './WonderLab.vue';


Vue.component('vue-drag-resize', VueDragResize);

const wonderlab = createApp(WonderLab);