<template>
  <div class="gallery">
    <h1 class="gallery__title">Gallery</h1>
    <v-tabs show-arrows centered>
      <v-tab @click="tabChange('all')">all</v-tab>
      <v-tab
        v-for="(tag, index) in tags"
        :key="index"
        @click="tabChange(tag.fields.name)"
      >
        {{ tag.fields.name }}
      </v-tab>
    </v-tabs>
    <Grid>
      <template v-for="gallery in galleries">
        <v-col
          v-if="tagName === gallery.fields.tag.fields.name"
          cols="12"
          sm="6"
          md="4"
          lg="4"
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

        <v-col
          v-else-if="tagName === 'all'"
          cols="12"
          sm="6"
          md="4"
          lg="4"
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
      </template>
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
        content_type: 'galleryTag',
        order: 'sys.id'
      })
    ]).catch((error) => {
      console.log(error)
    })
    return {
      galleries: response.items,
      tags: response.includes.Entry
    }
  },
  data() {
    return {
      isActive: false,
      tagName: 'all'
    }
  },
  methods: {
    tabChange(tagName: string) {
      this.tagName = tagName
    }
  },
  head() {
    return {
      title: 'Gallery'
    }
  }
})
</script>

<style lang="scss" scoped>
.gallery {
  &__title {
    text-align: center;
    margin-bottom: 24px;
    font-weight: 500;
  }
}
</style>
