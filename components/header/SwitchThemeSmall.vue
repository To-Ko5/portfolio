<template>
  <div class="switch-theme-small">
    <v-btn icon @click="switchTheme">
      <v-icon>{{ themeIcon }}</v-icon>
    </v-btn>
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
  },
  methods: {
    switchTheme() {
      this.theme = !this.theme
    }
  }
})
</script>

<style scoped></style>
