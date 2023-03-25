import HeaderWidget from '@/components/HeaderWidget.vue';
import SidebarWidget from '@/components/SidebarWidget.vue';
import WidgetShed from '@/components/WidgetShed.vue';
import FooterWidget from '@/components/FooterWidget.vue';

<template> 
<HeaderWidget />
<SidebarWidget />
<WidgetShed />
<FooterWidget />

</template>

export default {
  name: 'WonderLab',
  components: {
    HeaderWidget,
    SidebarWidget,
    WidgetShed,
    FooterWidget
  },
  // 
};
<button @click="createWonderWidget">Create WonderWidget</button>
methods: {
  createWonderWidget() {
    const newId = 'widget-' + Date.now();
    this.$refs.widgetShed.saveWidget({ id: newId });
  },
  <wonder-widget
  v-for="widget in $refs.widgetShed.widgets"
  :key="widget.id"
  :id="widget.id"
/>