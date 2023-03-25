<template>
  <vue-drag-resize :id="id">
    <slot></slot>
  </vue-drag-resize>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>