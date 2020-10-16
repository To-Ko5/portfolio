<template>
  <div class="side-bar">
    <v-navigation-drawer v-model="drawerState" fixed temporary>
      <v-list nav dense>
        <div class="side-bar__search d-sm-none">
          <SearchForm />
        </div>
        <v-list-item-group active-class="text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/gallery">
            <v-list-item-icon>
              <v-icon>mdi-image-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contact">
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchForm from '~/components/header/SearchForm.vue'

export default Vue.extend({
  name: 'Sidebar',
  components: {
    SearchForm
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawerState: this.drawer
    }
  },
  watch: {
    drawer() {
      this.drawerState = !this.drawerState
    }
  }
})
</script>

<style lang="scss" scoped>
.side-bar {
  &__search {
    margin-bottom: 8px;
  }
}
</style>
