<template>
    <div class="wondershed">
      <wonder-widget
        v-for="(widget, index) in widgets"
        :key="index"
        :widget="widget"
        @delete="deleteWidget(index)"
        @update="updateWidget(index, $event)"
      />
      <button @click="addWidget">Add Widget</button>
    </div>
  </template>
  
  <script>
  import WonderWidget from './components/WonderWidget.vue';
  
  export default {
    components: {
      WonderWidget,
    },
    data() {
      return {
        widgets: [],
      };
    },
    methods: {
      addWidget() {
        // Add new widget to the widgets array
        this.widgets.push({
          id: new Date().getTime(),
          x: 0,
          y: 0,
          width: 100,
          height: 100,
        });
      },
      deleteWidget(index) {
        // Remove the widget from the widgets array
        this.widgets.splice(index, 1);
      },
      updateWidget(index, updatedWidget) {
        // Update the widget in the widgets array
        this.$set(this.widgets, index, updatedWidget);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  .wondershed {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  
  