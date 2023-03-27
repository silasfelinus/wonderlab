<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>Widget Wonderlab</q-toolbar-title>
      <q-space></q-space>
      <q-btn flat @click="saveLab" label="Save" icon="save"></q-btn>
      <q-btn flat @click="loadLab" label="Load" icon="folder_open"></q-btn>
      <q-btn flat @click="createNewWidget" label="New Widget" icon="add"></q-btn>
      <q-btn flat @click="toggleNightMode" icon="brightness_4"></q-btn>
      <q-btn flat @click="userLogin" label="Login" icon="person"></q-btn>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    saveLab() {
      // Implement save lab functionality
      console.log('Save Lab');
    },
    loadLab() {
      // Implement load lab functionality
      console.log('Load Lab');
    },
    createNewWidget() {
      // Implement create new widget functionality
      console.log('Create New Widget');
    },
    toggleNightMode() {
      // Implement night mode toggle functionality
      console.log('Toggle Night Mode');
    },
    userLogin() {
      // Implement user login functionality
      console.log('User Login');
    },
  },
});
</script>