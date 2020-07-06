<template>
  <div class="top-page">
    <Item v-for="work in works" :key="work.sys.id" :work="work" />
    <p>ddd</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '~/components/Item.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default Vue.extend({
  components: {
    Item
  },
  async asyncData() {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'work',
        order: '-sys.createdAt'
      })
    ]).catch((error) => {
      console.log(error)
    })

    return {
      works: response.items
    }
  }
})
</script>

<style lang="scss" scoped>
.top-page {
  padding-top: 100px;
}
</style>
