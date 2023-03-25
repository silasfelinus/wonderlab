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
