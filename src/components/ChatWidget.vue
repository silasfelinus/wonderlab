<template>
  <div class="chatwidget">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message">
        {{ message }}
      </div>
    </div>
    <div class="input-container">
      <input
        type="text"
        v-model="inputMessage"
        @keyup.enter="submitMessage"
        placeholder="Type your message..."
      />
      <button @click="submitMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatWidget",
  data() {
    return {
      messages: [],
      inputMessage: "",
    };
  },
  methods: {
    submitMessage() {
      if (this.inputMessage.trim()) {
        this.messages.push(this.inputMessage.trim());
        this.inputMessage = "";
      }
    },
  },
};
</script>

<style scoped>

.chatbox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 600px;
  border: 2px solid #333;
  border-radius: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

.messages {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 80%;
  margin-bottom: 20px;
}

.message {
  padding: 10px;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

.input-container {
  display: flex;
  align-items: center;
}

input[type="text"] {
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #999;
}

button {
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}
</style>