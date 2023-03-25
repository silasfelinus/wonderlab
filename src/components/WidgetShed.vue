<template>
    <div>
        <!-- Your component's HTML goes here -->
    </div>
</template>
  
<script>

export default {
    name: 'WidgetShed',
    data() {
        return {
            widgets: []
        };
    },
    methods: {
        saveWidget(widget) {
            this.widgets.push(widget);
        },
        loadWidget(widgetId) {
    return this.widgets.find((widget) => widget.id === widgetId);
  },  
        destroyWidget(widgetId) {
    this.widgets = this.widgets.filter((widget) => widget.id !== widgetId);
  }
    },
        saveLabState() {
    localStorage.setItem('wonderlabState', JSON.stringify(this.widgets));
  },
        loadLabState() {
    const savedState = localStorage.getItem('wonderlabState');
    if (savedState) {
      this.widgets = JSON.parse(savedState);
    }
  }
};



</script>