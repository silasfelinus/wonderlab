import { createApp } from 'vue';
import { createStore } from 'vuex';
import Vue from 'vue';
import VueDragResize from 'vue-drag-resize';
import WonderLab from './WonderLab.vue';
import APIWidget from './components/APIWidget.vue';
import ChatWidget from './components/ChatWidget.vue';
import CloudWidget from './components/CloudWidget.vue';
import DragResize from './components/DragResize.vue';
import FooterWidget from './components/FooterWidget.vue';
import HeaderWidget from './components/HeaderWidget.vue';
import ImageWidget from './components/ImageWidget.vue';
import LibraryWidget from './components/LibraryWidget.vue';
import PromptWidget from './components/PromptWidget.vue';
import SidebarWidget from './components/SidebarWidget.vue';
import SoundWidget from './components/SoundWidget.vue';
import Welcome from './components/Welcome.vue';
import Widgetshed from './components/Widgetshed.vue';
import WonderWidget from './components/WonderWidget.vue';

const store = createStore({
    state: {
      // Your state properties
    },
    mutations: {
      // Your state mutations
    },
    actions: {
      // Your actions
    },
    modules: {
      // Your modules, if any
    },
  });


createApp(WonderLab)
  .use(store)
  .component('APIWidget', APIWidget)
  .component('ChatWidget', ChatWidget)
  .component('CloudWidget', CloudWidget)
  .component('DragResize', DragResize)
  .component('FooterWidget', FooterWidget)
  .component('HeaderWidget', HeaderWidget)
  .component('ImageWidget', ImageWidget)
  .component('LibraryWidget', LibraryWidget)
  .component('PromptWidget', PromptWidget)
  .component('SidebarWidget', SidebarWidget)
  .component('SoundWidget', SoundWidget)
  .component('Welcome', Welcome)
  .component('Widgetshed', Widgetshed)
  .component('WonderWidget', WonderWidget)
  .mount('#app');
