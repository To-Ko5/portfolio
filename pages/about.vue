<template>
  <div class="about">
    <Profile />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Profile from '~/components/Profile.vue'

export default Vue.extend({
  components: {
    Profile
  }
})
</script>

<style lang="scss" scoped></style>
