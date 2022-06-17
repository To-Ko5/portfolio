<template>
  <div class="noise" :style="backgroundStyles"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    backgroundStyles() {
      const imgUrl = (this as any).$img(
        '/top/noise.gif',
        { animated: true, format: 'webp' },
        { provider: 'static' }
      )
      return {
        background: `url('${imgUrl}') repeat left top`
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.noise {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 600;
  height: 100%;
  width: 100%;
  opacity: 0.3;
}
</style>
