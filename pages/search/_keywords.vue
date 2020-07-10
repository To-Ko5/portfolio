<template>
  <div class="search">
    <div v-if="$route.params.keywords" class="search__result">
      <p>検索キーワード:{{ $route.params.keywords }}</p>
      <p>検索結果:{{ works.length }}</p>
    </div>
    <div v-if="works.length <= 0" class="not-keywords">
      <v-btn outlined to="/">一覧へ戻る</v-btn>
    </div>
    <Grid>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="4"
        v-for="work in works"
        :key="work.sys.id"
      >
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
        query: params.keywords,
        order: '-sys.createdAt'
      })
    ]).catch((error) => {
      console.log(error)
    })

    if (response.items.length <= 0) {
      console.log(response.items.length)
    }
    return {
      works: response.items
    }
  }
})
</script>

<style scoped></style>
