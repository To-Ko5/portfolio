<template>
  <div class="profile">
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="profile.fields.profileImg.fields.file.url"
        height="200px"
      ></v-img>

      <v-card-title>
        {{ profile.fields.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ profile.fields.job }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text><v-icon>mdi-github</v-icon></v-btn>

        <v-btn color="purple" text>
          <v-icon>mdi-twitter</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ profile.fields.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    profile: {
      type: Object as PropType<{}>,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  }
})
</script>

<style scoped></style>
