
<template>
  <VueDraggableNext>
      <header class="sidebar">
    <h1 class="sidebar__logo">WonderLab</h1>
  </VueDraggableNext>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

export default defineComponent({
  components: {
    VueDraggableNext,
  },
});
</script>

<style lang="scss" scoped>
</style>