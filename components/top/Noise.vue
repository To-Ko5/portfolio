<template>
  <div class="noise"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.noise {
  background: url('~@/assets/img/noise.gif') repeat left top;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 600;
  height: 100%;
  width: 100%;
  opacity: 0.3;
}
</style>
