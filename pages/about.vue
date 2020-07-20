<template>
  <div class="about">
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
  }
})
</script>

<style lang="scss" scoped></style>
