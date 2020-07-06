<template>
  <v-app dark>
    <Header />
    <nuxt />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  data() {
    return {}
  },
  components: {
    Header
  }
}
</script>
