<template>
  <div class="tag">
    <h1 class="tag__title">Tag</h1>
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
        content_type: 'tag',
        order: '-sys.id'
      })
      .catch((error: any) => {
        console.log(error)
      })

    return {
      tags: response.items
    }
  },
  head() {
    return {
      title: 'Tag'
    }
  }
})
</script>

<style lang="scss" scoped>
.tag {
  &__title {
    text-align: center;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 500;
  }
}
</style>
