<template>
  <div class="switch-theme">
    <v-switch
      v-model="theme"
      hide-details
      color="white"
      :prepend-icon="themeIcon"
    ></v-switch>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      theme: true
    }
  },
  computed: {
    themeIcon(): string {
      return this.theme ? 'mdi-weather-night' : 'mdi-weather-sunny'
    }
  },
  watch: {
    theme() {
      // @ts-ignore
      this.$vuetify.theme.dark = this.theme
    }
  }
})
</script>

<style scoped></style>
