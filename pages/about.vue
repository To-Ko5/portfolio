<template>
  <div class="about">
    <h1 class="about__title">About</h1>
    <Profile :profile="profile" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Profile from '~/components/Profile.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default Vue.extend({
  components: {
    Profile
  },
  async asyncData() {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'profile'
      })
    ]).catch((error) => {
      console.log(error)
    })

    return {
      profile: response.items[0]
    }
  },
  head() {
    return {
      title: 'About'
    }
  }
})
</script>

<style lang="scss" scoped>
.about {
  &__title {
    text-align: center;
    margin-bottom: 24px;
    font-weight: 500;
  }
}
</style>
