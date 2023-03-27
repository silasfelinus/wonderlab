<template>
  <q-drawer side="left">
    <q-list>
      <q-item v-for="(message, index) in messages" :key="index">
        <q-chat-message
          :sent="message.sent"
          :text="message.text"
          :bg-color="message.sent ? 'primary' : 'grey-3'"
          :text-color="message.sent ? 'white' : 'dark'"
        ></q-chat-message>
      </q-item>
    </q-list>
    <q-input
      v-model="messageInput"
      outlined
      @keyup.enter="sendMessage"
      placeholder="Type your message..."
    ></q-input>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

interface Message {
  sent: boolean;
  text: string;
}

export default defineComponent({
  setup() {
    const messageInput = ref('');
    const messages: Ref<Message[]> = ref([]);

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
