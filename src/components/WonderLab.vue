<template>
  <q-card>
    <q-card-section>
      <div id="wonderlab">
        <wonder-widget v-for="(widget, index) in widgets" :key="index" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WonderWidget from './WonderWidget.vue';

export default defineComponent({
  components: {
    WonderWidget,
  },
  data() {
    return {
      widgets: [], // Populate this array with your widgets
    };
  },
});
</script>

<style scoped>
#wonderlab {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
