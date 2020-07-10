<template>
  <div class="tag">
    <h2>Tag</h2>
    <Grid>
      <v-col cols="6" sm="4" v-for="tag in tags" :key="tag.sys.id">
        <v-btn
          outlined
          :to="{ path: '/tag/' + tag.sys.id, query: { tag: tag.fields.name } }"
          width="100%"
          >{{ tag.fields.name }}</v-btn
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
        content_type: 'tag',
        order: '-sys.id'
      })
    ]).catch((error) => {
      console.log(error)
    })

    return {
      tags: response.items
    }
  }
})
</script>
