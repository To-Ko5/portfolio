<template>
  <div class="header-menu">
    <v-menu open-on-hover transition="slide-y-transition" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>{{ mdiDotsVertical }}</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item to="/category">
          <v-list-item-title>Category</v-list-item-title>
        </v-list-item>
        <v-list-item to="/tag">
          <v-list-item-title>Tag</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiDotsVertical } from '@mdi/js'

export default Vue.extend({
  data() {
    return {
      mdiDotsVertical
    }
  }
})
</script>

<style scoped></style>
