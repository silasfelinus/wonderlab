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
#wonderlab {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>