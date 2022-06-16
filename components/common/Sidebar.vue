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
              <v-icon>{{ mdiHome }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>{{ mdiAccount }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/gallery">
            <v-list-item-icon>
              <v-icon>{{ mdiImageMultiple }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contact">
            <v-list-item-icon>
              <v-icon>{{ mdiEmail }}</v-icon>
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
import { mdiHome, mdiAccount, mdiImageMultiple, mdiEmail } from '@mdi/js'

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
      drawerState: this.drawer,
      mdiHome,
      mdiAccount,
      mdiImageMultiple,
      mdiEmail
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
