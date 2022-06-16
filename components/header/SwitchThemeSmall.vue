<template>
  <div class="switch-theme-small">
    <v-btn icon @click="switchTheme">
      <v-icon>{{ mdiWeatherSunny }}</v-icon>
    </v-btn>
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
      // @ts-ignore
      this.$vuetify.theme.dark = this.theme
    }
  },
  methods: {
    switchTheme() {
      this.theme = !this.theme
    }
  }
})
</script>

<style scoped></style>
