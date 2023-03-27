<template>
  <div class="wonderlab">
    <draggable v-model="widgets">
      <div
        v-for="widget in widgets"
        :key="widget.id"
        class="wonder-widget"
        :style="{ top: widget.y + 'px', left: widget.x + 'px' }"
      >
        <wonder-widget :widget="widget" />
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Draggable from 'vuedraggable';
import WonderWidget from './WonderWidget.vue';

export default defineComponent({
  components: {
    Draggable,
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
