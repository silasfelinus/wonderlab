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
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
import ChatWindow from './components/ChatWindow.vue';
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