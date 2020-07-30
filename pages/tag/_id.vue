<template>
  <div class="tag-id">
    <div class="tag-id__result">
      <v-btn to="/tag" color="blue" small outlined>
        <v-icon left small>mdi-label</v-icon>
        Tag
      </v-btn>
      <h1 class="tag-id__title">{{ $route.query.tag }}</h1>
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
import Grid from '~/components/common/Grid.vue'

import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default Vue.extend({
  components: {
    Item,
    Grid
  },
  async asyncData({ params, redirect }) {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'work',
        'fields.tag.sys.id': params.id,
        order: '-sys.createdAt'
      })
    ]).catch((error) => {
      console.log(error)
    })

    if (response.items == '') {
      redirect('/tag')
    }

    return {
      works: response.items
    }
  }
})
</script>

<style lang="scss" scoped>
.tag-id {
  &__result {
    max-width: 500px;
    margin: 0 auto 24px;
    text-align: center;
    padding: 0 12px;
  }
  &__title {
    margin-top: 8px;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
