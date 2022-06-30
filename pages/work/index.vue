<template>
  <div class="work">
    work
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData({ redirect }) {
    redirect('/')
  }
})
</script>

<style scoped></style>
