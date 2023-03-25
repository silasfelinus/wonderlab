<template>
  <div id="wonderlab">
    <vue-drag-resize>
      <widget-shed />
    </vue-drag-resize>
  </div>
</template>

<script>
import WidgetShed from './components/WidgetShed.vue';

export default {
  components: {
    WidgetShed
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>