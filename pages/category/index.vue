<template>
  <div class="category">
    <h2>Category</h2>
    <Grid>
      <v-col
        cols="6"
        sm="4"
        v-for="category in categories"
        :key="category.sys.id"
      >
        <v-btn
          outlined
          :to="{
            path: '/category/' + category.sys.id,
            query: { category: category.fields.name }
          }"
          width="100%"
          >{{ category.fields.name }}</v-btn
        >
      </v-col>
    </Grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '~/components/Grid.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default Vue.extend({
  components: {
    Grid
  },
  async asyncData() {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'category',
        order: '-sys.id'
      })
    ]).catch((error) => {
      console.log(error)
    })
    return {
      categories: response.items
    }
  }
})
</script>
