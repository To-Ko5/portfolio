<template>
  <div class="top-page">
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
