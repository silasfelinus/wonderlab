<template>
    <div class="widgetshed">
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
  import WonderWidget from './WonderWidget.vue';
  
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
  </style>
  