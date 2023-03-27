<template>
  <q-layout>
    <Header />
    <q-page-container>
      <ChatWindow />
      <WonderLab />
      <Footer />
    </q-page-container>
    <Sidebar />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/HeaderWidget.vue';
import Sidebar from './components/SideWidget.vue';
import Footer from './components/FooterWidget.vue';
import ChatWindow from './components/ChatWidget.vue';
import WonderLab from './components/WonderLab.vue';

export default defineComponent({
  components: {
    Header,
    Sidebar,
    Footer,
    ChatWindow,
    WonderLab,
  },
});
</script>