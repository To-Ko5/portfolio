<template>
  <div class="gallery"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import GalleryItem from '~/components/GalleryItem.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default Vue.extend({
  components: {
    GalleryItem
  },
  async asyncData() {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'gallery',
        order: 'sys.createdAt'
      })
    ]).catch((error) => {
      console.log(error)
    })
    console.log(response.items)
    return {
      galleries: response.items
    }
  }
})
</script>

<style lang="scss" scoped></style>
