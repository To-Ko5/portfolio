<template>
  <div class="top-page">
    <Grid>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(work, index) in works"
        :key="work.sys.id"
      >
        <Item :work="work" :index="index" />
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
  },
  head() {
    return {
      title: 'Home'
    }
  }
})
</script>

<style lang="scss" scoped>
// CLS対策の為に直接記述
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
@media (min-width: 600px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
@media (min-width: 960px) {
  .col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }
}
</style>
