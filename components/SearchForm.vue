<template>
  <div class="search-form">
    <v-text-field
      v-model="searchWords"
      outlined
      clearable
      dense
      color="white"
      label="Search"
      type="text"
      class="search-form__text"
    >
    </v-text-field>
    <v-btn icon :color="color" @click="sendSearch">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const seachFormColor = {
  defaultColor: 'white',
  activeColor: 'orange'
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
      const word = this.searchWords.trim()
      if (word) {
        this.color = seachFormColor.activeColor
      } else {
        this.color = seachFormColor.defaultColor
      }
    }
  },
  methods: {
    sendSearch() {
      const word = this.searchWords.trim()
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
