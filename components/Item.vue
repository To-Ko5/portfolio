<template>
  <div class="item">
    <v-card class="item__card">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="work.fields.image.fields.file.url"
      >
      </v-img>
      <v-card-title>{{ work.fields.title }}</v-card-title>
      <v-card-subtitle>
        {{ work.fields.subtitle }}
      </v-card-subtitle>
      <v-card-text>
        <v-chip to="/category" label outlined text-color="white">
          <v-icon left>mdi-label</v-icon>
          Category
        </v-chip>
        <v-chip-group>
          <v-chip link
            ><nuxt-link :to="'/category/' + work.fields.category.sys.id">{{
              work.fields.category.fields.name
            }}</nuxt-link></v-chip
          >
        </v-chip-group>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-chip to="/tag" label outlined text-color="white">
          <v-icon left>mdi-label</v-icon>
          Tags
        </v-chip>
        <v-chip-group>
          <v-chip v-for="tag in work.fields.tag" :key="tag.sys.id">
            <nuxt-link :to="'/tag/' + tag.sys.id">
              {{ tag.fields.name }}
            </nuxt-link>
          </v-chip>
        </v-chip-group>
      </v-card-text>
      <nuxt-link :to="/work/ + work.fields.slug">詳細を見る</nuxt-link>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    work: {
      type: Object as PropType<{}>
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  &__card {
    margin: 0 auto;
    width: 100%;
    max-width: 333px;
  }
}
</style>
