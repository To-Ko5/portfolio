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
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      theme: true,
      mdiWeatherNight,
      mdiWeatherSunny
    }
  },
  computed: {
    themeIcon(): string {
      return this.theme ? this.mdiWeatherNight : this.mdiWeatherSunny
    }
  },
  watch: {
    theme() {
      ;(this as any).$vuetify.theme.dark = this.theme
    }
  }
})
</script>

<style scoped></style>
