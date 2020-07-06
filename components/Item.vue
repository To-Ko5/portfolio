<template>
  <v-layout column justify-center align-center>
    <v-card class="mx-auto" max-width="344">
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
        <v-chip-group>
          <v-chip>{{ work.fields.category.fields.name }}</v-chip>
        </v-chip-group>
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-chip-group>
          <v-chip v-for="tag in work.fields.tag" :key="tag.sys.id">
            {{ tag.fields.name }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    work: {
      type: <any>{}
    }
  }
})
</script>
