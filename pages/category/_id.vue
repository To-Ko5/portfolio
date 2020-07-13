<template>
  <div class="category-id">
    <div class="category-id__result">
      <v-btn to="/category" color="blue" small outlined>
        <v-icon left small>mdi-label</v-icon>
        Category
      </v-btn>
      <h2 class="category-id__title">{{ $route.query.category }}</h2>
    </div>
    <Grid>
      <v-col cols="12" sm="6" lg="4" v-for="work in works" :key="work.sys.id">
        <Item :work="work" />
      </v-col>
    </Grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from '~/components/Item.vue'
import Grid from '~/components/Grid.vue'

import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default Vue.extend({
  components: {
    Item,
    Grid
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

<style lang="scss" scoped>
.category-id {
  &__result {
    max-width: 500px;
    margin: 0 auto 24px;
    text-align: center;
    padding: 0 12px;
  }
  &__title {
    margin-top: 8px;
  }
}
</style>
