<template>
  <div class="wonderlab">

  </div>
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
      widgets: [
        // Add your widgets data with x and y positions here
      ],
    };
  },
});
</script>
