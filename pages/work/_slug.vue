<template>
  <div class="slug">
    <div class="key-visual">
      <nuxt-img
        :src="work.fields.image.fields.file.url"
        :width="work.fields.image.fields.file.details.image.width"
        :height="work.fields.image.fields.file.details.image.height"
        preload
        quality="80"
        :alt="`${work.fields.title}` + '-' + 'image'"
        fit="contain"
      />
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
        <v-icon small>{{ mdiLabel }}</v-icon>
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
        <v-icon small>{{ mdiLabel }}</v-icon>
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
    <div class="slug__back">
      <v-btn to="/" color="grey lighten-1" outlined>
        <v-icon dark left>{{ mdiArrowLeft }}</v-icon
        >Back
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiLabel, mdiArrowLeft } from '@mdi/js'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default Vue.extend({
  async asyncData({ params, redirect }) {
    const response = await client
      .getEntries({
        content_type: 'work',
        'fields.slug': params.slug
      })
      .catch((error: any) => {
        console.log(error)
      })

    if (!response.items[0]) {
      redirect('/')
    }

    return {
      work: response.items[0]
    }
  },
  data() {
    return {
      mdiLabel,
      mdiArrowLeft
    }
  },
  methods: {
    openLink(url: string) {
      window.open(url, '_blank')
    }
  },
  head(): any {
    let self: any = this
    return {
      title: self.work.fields.title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: self.work.fields.subtitle
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.ORGIN_URL + this.$route.path
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https:' + self.work.fields.image.fields.file.url
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.slug {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  &__title {
    margin-bottom: 8px;
    font-size: 28px;
    font-weight: 500;
  }
  &__category {
    margin-bottom: 16px;
  }
  &__tag {
    margin-bottom: 32px;
    display: flex;
  }
  &__content {
    margin-bottom: 32px;
  }
  &__link {
    max-width: 500px;
    margin: 0 auto;
  }
  &__back {
    margin-top: 64px;
  }
}

.key-visual {
  width: 100%;
  margin-bottom: 16px;
  & > img {
    max-width: 100%;
    height: clamp(300px, 50%, 400px);
  }
}

.item-label {
  margin-right: 8px;
}

.tag-button {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
