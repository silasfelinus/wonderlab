<template>
    <div>
      <!-- Your component's HTML goes here -->
    </div>
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