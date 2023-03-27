<template>
    <q-drawer side="left">
      <q-chat-message
        v-for="(message, index) in messages"
        :key="index"
        :sent="message.sent"
        :text="message.text"
      />
      <q-input
        v-model="messageInput"
        outlined
        @keyup.enter="sendMessage"
        placeholder="Type your message..."
      />
    </q-drawer>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const messageInput = ref('');
      const messages = ref([]);
  
      function sendMessage() {
        if (messageInput.value) {
          messages.value.push({ sent: true, text: messageInput.value });
          messageInput.value = '';
        }
      }
  
      return {
        messageInput,
        messages,
        sendMessage,
      };
    },
  });
  </script>
  