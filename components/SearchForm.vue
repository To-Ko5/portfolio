<template>
  <div class="search-form d-flex">
    <v-text-field
      v-model="searchWords"
      outlined
      clearable
      label="Search"
      type="text"
    >
      <template v-slot:append>
        <v-fade-transition leave-absolute> </v-fade-transition>
      </template>
    </v-text-field>
    <v-btn icon color="deep-orange" @click="sendSearch">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      searchWords: ''
    }
  },
  methods: {
    sendSearch() {
      this.$router.push('/search/' + this.searchWords)
    }
  }
})
</script>

<style scoped>
.search-form {
  height: 100%;
}
</style>
