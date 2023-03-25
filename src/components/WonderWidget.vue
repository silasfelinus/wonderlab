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
