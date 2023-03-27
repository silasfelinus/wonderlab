<template>
  <q-drawer show-if-above>
    <q-list>
      <q-item v-for="(icon, index) in icons" :key="index">
        <q-item-section>
          <q-icon :name="icon.name" />
        </q-item-section>
        <q-item-section>{{ icon.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      icons: [
        { name: 'text_fields', label: 'New Text Input' },
        { name: 'text_snippet', label: 'New Text Display' },
        // Add the rest of the icons and labels following the same structure
      ],
    };
  },
});
</script>
