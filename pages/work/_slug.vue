<template>
  <div class="slug">
    <div class="key-visual">
      <img :src="work.fields.image.fields.file.url" class="key-visual__image" />
    </div>
    <h1 class="slug__title">{{ work.fields.title }}</h1>
    <p class="slug__sub-title">{{ work.fields.subtitle }}</p>

    <div class="slug__category">
      <v-btn
        small
        to="/category"
        outlined
        color="grey lighten-1"
        exact
        class="item-label"
      >
        <v-icon small>mdi-label</v-icon>
        Category
      </v-btn>
      <v-btn
        small
        :to="{
          path: '/category/' + work.fields.category.sys.id,
          query: { category: work.fields.category.fields.name }
        }"
        >{{ work.fields.category.fields.name }}</v-btn
      >
    </div>

    <div class="slug__tag">
      <v-btn
        small
        to="/tag"
        outlined
        color="grey lighten-1"
        exact
        class="item-label"
      >
        <v-icon small>mdi-label</v-icon>
        Tag
      </v-btn>

      <v-btn-toggle class="tag-button">
        <v-btn
          v-for="tag in work.fields.tag"
          :key="tag.sys.id"
          small
          :to="{
            path: '/tag/' + tag.sys.id,
            query: { tag: tag.fields.name }
          }"
        >
          {{ tag.fields.name }}
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="slug__content" v-html="$md.render(work.fields.content)"></div>
    <div v-if="work.fields.url" class="slug__link">
      <v-btn outlined @click="openLink(work.fields.url)" width="100%"
        >Read More</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default Vue.extend({
  async asyncData({ params, redirect }) {
    const [response]: any = await Promise.all([
      client.getEntries({
        content_type: 'work',
        'fields.slug': params.slug
      })
    ]).catch((error) => {
      console.log(error)
    })

    if (!response.items[0]) {
      redirect('/')
    }

    return {
      work: response.items[0]
    }
  },
  methods: {
    openLink(url: string) {
      window.open(url, '_blank')
    }
  }
})
</script>

<style lang="scss" scoped>
.slug {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  &__category {
    margin-bottom: 16px;
  }
  &__tag {
    margin-bottom: 24px;
    display: flex;
  }
  &__content {
    margin-bottom: 32px;
  }
  &__link {
    max-width: 500px;
    margin: 0 auto;
  }
}

.key-visual {
  width: 100%;
  margin-bottom: 16px;
  &__image {
    max-width: 100%;
  }
}

.item-label {
  margin-right: 8px;
}

.tag-button {
  white-space: pre;
  overflow-x: scroll;
}
</style>