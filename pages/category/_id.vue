<template>
  <div class="category">
    <Item v-for="work in works" :key="work.sys.id" :work="work" />
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
  async asyncData({ params }) {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'work',
        'fields.category.sys.id': params.id,
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

<style scoped></style>
