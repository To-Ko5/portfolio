<template>
  <div class="category">
    <h1 class="category__title">Category</h1>
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
import Grid from '~/components/common/Grid.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default Vue.extend({
  components: {
    Grid
  },
  async asyncData() {
    const response = await client
      .getEntries({
        content_type: 'category',
        order: '-sys.id'
      })
      .catch((error: any) => {
        console.log(error)
      })
    return {
      categories: response.items
    }
  },
  head() {
    return {
      title: 'Category'
    }
  }
})
</script>

<style lang="scss" scoped>
.category {
  &__title {
    text-align: center;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 500;
  }
}
</style>
