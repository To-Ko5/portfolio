<template>
  <v-container class="container">
    <v-row>
      <slot />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
}
</style>
