<template>
  <v-app dark>
    <Header />
    <div class="main">
      <nuxt />
    </div>
    <ReturnTopButton />
    <Footer />
  </v-app>
</template>

<script>
import Header from '~/components/header/Header.vue'
import Footer from '~/components/Footer.vue'
import ReturnTopButton from '~/components/common/ReturnTopButton.vue'

export default {
  components: {
    Header,
    Footer,
    ReturnTopButton
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 100px 0;
}
</style>
