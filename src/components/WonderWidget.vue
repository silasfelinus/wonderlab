<template>
    <vue-drag-resize :id="id">
      <!-- Your WonderWidget content goes here -->
    </vue-drag-resize>
  </template>
  
  <script>
  export default {
    name: 'WonderWidget',
    data() {
      return {
        props: {
    id: {
      type: String,
      required: true,
    },
  },       
      };
    },
    methods: {
      // Your component's methods go here
    },
  };
  </script>