<template>
    <VueDraggableNext>
    <div class="button">
      <wonder-widget
        v-for="(widget, index) in widgets"
        :key="index"
        :widget="widget"
        @delete="deleteWidget(index)"
        @update="updateWidget(index, $event)"
      />
      <button @click="addWidget">Add Widget</button>
    </div>
  </VueDraggableNext>
  </template>
  
  <script lang="ts">
  import WonderWidget from './components/WonderWidget.vue';
  
  export default {
    components: {
      WonderWidget,
    },
    data() {
      return {
        name: 'WonderShed',
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


import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

export default defineComponent({
  components: {
    VueDraggableNext,
  },
});
  </script>
  