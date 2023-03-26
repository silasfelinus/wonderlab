<template>
  <VueDraggableNext>
    <!-- Your draggable content goes here -->
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