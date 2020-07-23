<template>
  <div class="gallery">
    <div v-for="(tag, index) in tags" :key="index">
      {{ tag.fields.name }}
    </div>
    <Grid>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="4"
        v-for="gallery in galleries"
        :key="gallery.sys.id"
      >
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5
          }"
          transition="fade-transition"
        >
          <GalleryItem :gallery="gallery" />
        </v-lazy>
      </v-col>
    </Grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GalleryItem from '~/components/GalleryItem.vue'
import Grid from '~/components/common/Grid.vue'

import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default Vue.extend({
  components: {
    GalleryItem,
    Grid
  },
  async asyncData() {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'gallery',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        content_type: 'tag',
        order: '-sys.id'
      })
    ]).catch((error) => {
      console.log(error)
    })
    console.log(response.includes.Entry)
    return {
      galleries: response.items,
      tags: response.includes.Entry
    }
  },
  data() {
    return {
      isActive: false
    }
  }
})
</script>

<style lang="scss" scoped></style>
