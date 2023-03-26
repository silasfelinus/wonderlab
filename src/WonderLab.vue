<template>
  <div>
    <div class="wondershed" ref="wondershed" v-resizable></div>
    <button @click="createWonderWidget">Create WonderWidget</button>
    <div v-for="widget in wonderWidgets" :key="widget.id" :style="{top: widget.y + 'px', left: widget.x + 'px'}" class="wonder-widget">{{ widget.id }}</div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import Wondershed from './components/Wondershed.vue'
import WonderWidget from './components/WonderWidget.vue'

export default {
  name: 'WonderLab',
  components: {
    Wondershed,
    WonderWidget
  },
  setup() {
    const wonderWidgets = reactive([])

    function createWonderWidget() {
      const widget = {
        id: Math.random().toString(36).substr(2, 9),
        x: Math.floor(Math.random() * (window.innerWidth - 100)),
        y: Math.floor(Math.random() * (window.innerHeight - 100))
      }
      wonderWidgets.push(widget)
    }

    onMounted(() => {
      const wondershedEl = this.$refs.wondershed
      const wondershedRect = wondershedEl.getBoundingClientRect()

      wondershedEl.style.position = 'absolute'
      wondershedEl.style.top = wondershedRect.top + 'px'
      wondershedEl.style.left = wondershedRect.left + 'px'
    })

    return {
      wonderWidgets,
      createWonderWidget
    }
  }
}
</script>

<style>
.wondershed {
  width: 100px;
  height: 100px;
  background-color: #f00;
  position: absolute;
  top: 0;
  left: 0;
}

.wonder-widget {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #0f0;
}
</style>