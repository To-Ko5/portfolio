<template>
  <div class="header">
    <v-app-bar fixed dark>
      <v-app-bar-nav-icon @click="drawerOpen"></v-app-bar-nav-icon>

      <v-toolbar-title>Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>

      <SearchForm />

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <SideBar :drawer="drawer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchForm from '~/components/SearchForm.vue'
import SideBar from '~/components/SideBar.vue'

export default Vue.extend({
  name: 'Header',
  components: {
    SearchForm,
    SideBar
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
