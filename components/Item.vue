<template>
  <div class="item">
    <v-card class="item__card justify-space-between" max-width="334" raised>
      <nuxt-img
        v-if="index < 3"
        :src="work.fields.image.fields.file.url"
        width="334"
        height="200"
        preload
        quality="80"
        :alt="work.fields.title"
      />

      <nuxt-img
        v-else
        :src="work.fields.image.fields.file.url"
        width="334"
        height="200"
        loading="lazy"
        quality="80"
        :alt="work.fields.title"
      />
      <v-card-title>{{ work.fields.title }}</v-card-title>
      <v-card-subtitle>
        {{ work.fields.subtitle }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn
          x-small
          to="/category"
          outlined
          color="grey lighten-1"
          exact
          class="item__label"
        >
          <v-icon x-small>{{ mdiLabel }}</v-icon>
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
      </v-card-actions>

      <v-card-actions>
        <v-btn
          x-small
          to="/tag"
          outlined
          color="grey lighten-1"
          exact
          class="item__label"
        >
          <v-icon x-small>{{ mdiLabel }}</v-icon>
          Tag
        </v-btn>

        <div v-if="work.fields.tag.length <= 1">
          <div v-for="tag in work.fields.tag" :key="tag.sys.id">
            <v-btn
              small
              :to="{
                path: '/tag/' + tag.sys.id,
                query: { tag: tag.fields.name }
              }"
            >
              {{ tag.fields.name }}
            </v-btn>
          </div>
        </div>

        <v-menu v-else open-on-hover transition="slide-y-transition" offset-x>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small v-bind="attrs" v-on="on">
              <v-icon>{{ mdiDotsHorizontal }}</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="tag in work.fields.tag"
              :key="tag.sys.id"
              :to="{
                path: '/tag/' + tag.sys.id,
                query: { tag: tag.fields.name }
              }"
            >
              <v-list-item-title>{{ tag.fields.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>
        <v-btn
          :to="/work/ + work.fields.slug"
          outlined
          color="blue"
          width="120px"
          >read more</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mdiDotsHorizontal, mdiLabel } from '@mdi/js'

export default Vue.extend({
  props: {
    work: {
      type: Object as PropType<{}>,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      mdiDotsHorizontal,
      mdiLabel
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  &__card {
    margin: 0 auto;
    width: 100%;
  }
  &__label {
    margin-right: 8px;
  }
}
</style>
