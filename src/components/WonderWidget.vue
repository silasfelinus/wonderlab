<template>
  <vue-drag-resize
    @resizing="onResize"
    @dragging="onDrag"
    @dragend="onDragEnd"
    @resizeend="onResizeEnd"
  >
    <div class="wonder-widget">
      <!-- Your widget content goes here -->
      <button @click="deleteWidget">X</button>
    </div>
  </vue-drag-resize>
</template>

<script>
export default {
  props: {
    widget: Object,
  },
  methods: {
    onResize(x, y, width, height) {
      this.$emit('update', { ...this.widget, width, height });
    },
    onDrag(x, y) {
      this.$emit('update', { ...this.widget, x, y });
    },
    onDragEnd(x, y) {
      this.$emit('update', { ...this.widget, x, y });
    },
    onResizeEnd(x, y, width, height) {
      this.$emit('update', { ...this.widget, width, height });
    },
    deleteWidget() {
      this.$emit('delete');
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.wonder-widget {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

button {
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: #f44336;
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #d32f2f;
}
</style>
