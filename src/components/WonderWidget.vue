<template>
  <div class="wonder-widget">
    <div class="input-grommet"></div>
    <div class="output-grommet"></div>
    <div class="data-display">Data Display</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  directives: {
  },
});


</script>

<style scoped>
.wonder-widget {
  position: absolute;
  /* Customize the dimensions and style of the wonder-widget */
}

.input-grommet,
.output-grommet {
  /* Customize the style of the input and output grommets */
}

.data-display {
  /* Customize the style of the data display */
}
</style>
