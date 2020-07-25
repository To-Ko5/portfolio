<template>
  <div class="header">
    <v-app-bar fixed>
      <v-app-bar-nav-icon @click="drawerOpen"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><h1 class="header__title">C-Portfolio</h1></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <SearchForm class="header__search d-none d-sm-flex" />
      <SwitchTheme class="d-none d-sm-flex" />
      <SwitchThemeSmall class="d-sm-none" />
      <HeaderMenu />
    </v-app-bar>

    <Sidebar :drawer="drawer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchForm from '~/components/header/SearchForm.vue'
import Sidebar from '~/components/common/Sidebar.vue'
import SwitchTheme from '~/components/header/SwitchTheme.vue'
import SwitchThemeSmall from '~/components/header/SwitchThemeSmall.vue'
import HeaderMenu from '~/components/header/HeaderMenu.vue'

export default Vue.extend({
  name: 'Header',
  components: {
    SearchForm,
    Sidebar,
    SwitchTheme,
    SwitchThemeSmall,
    HeaderMenu
  },
  data() {
    return {
      drawer: false,
      group: 'group'
    }
  },
  methods: {
    drawerOpen() {
      this.drawer = !this.drawer
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  &__title {
    font-size: 2rem;
  }
  &__search {
    margin: 0 24px;
  }
}
</style>
