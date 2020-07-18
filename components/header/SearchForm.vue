<template>
  <div class="search-form">
    <v-text-field
      v-model="searchWords"
      outlined
      clearable
      dense
      label="Search"
      type="text"
      class="search-form__text"
    >
    </v-text-field>
    <v-btn icon @click="sendSearch">
      <v-icon :color="color">mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const seachFormColor = {
  defaultColor: '',
  activeColor: 'primary'
}

export default Vue.extend({
  data() {
    return {
      searchWords: '',
      color: seachFormColor.defaultColor
    }
  },
  watch: {
    searchWords() {
      let word
      if (this.searchWords) {
        word = this.searchWords.trim()
      }

      if (word) {
        this.color = seachFormColor.activeColor
      } else {
        this.color = seachFormColor.defaultColor
      }
    }
  },
  methods: {
    sendSearch() {
      let word
      if (this.searchWords) {
        word = this.searchWords.trim()
      }

      if (!word) {
        this.searchWords = ''
        return
      }
      this.$router.push('/search/' + word)
    }
  }
})
</script>

<style lang="scss" scoped>
.search-form {
  height: 100%;
  display: flex;
  align-items: center;
  &__text {
    height: 40px;
  }
}
</style>
