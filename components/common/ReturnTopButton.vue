<template>
  <div class="return-top-button">
    <transition name="button">
      <v-btn v-show="buttonActive" fixed bottom right fab @click="returnTop">
        <v-icon>{{ mdiChevronUp }}</v-icon>
      </v-btn>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiChevronUp } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      buttonActive: false,
      scroll: 0,
      mdiChevronUp
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      ;(this as any).$vuetify.goTo(0)
    },
    scrollWindow() {
      const top = 100
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.button-enter-active,
.button-leave-active {
  transition: all 0.3s ease-out;
}
.button-enter,
.button-leave-to {
  opacity: 0;
  transform: scale(0.2);
}
</style>
