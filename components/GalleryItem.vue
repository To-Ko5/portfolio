<template>
  <div class="gallery-item">
    <v-img
      :src="gallery.fields.image.fields.file.url"
      lazy-src="https://picsum.photos/id/11/10/6?grayscale&blur=1"
      @click.stop="openDialog"
      class="gallery-image"
      :alt="`${gallery.fields.title}` + '-' + 'thumbnail'"
    ></v-img>
    <v-dialog
      v-model="dialog"
      max-width="800"
      overlay-color="black"
      overlay-opacity="0.9"
    >
      <div class="dialog">
        <v-img
          :src="gallery.fields.image.fields.file.url"
          class="dialog__image"
        ></v-img>
        <p class="dialog__title">{{ gallery.fields.title }}</p>
        <p class="dialog__description">{{ gallery.fields.description }}</p>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    gallery: {
      type: Object as PropType<{}>,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    }
  }
})
</script>

<style lang="scss" scoped>
.gallery-image {
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: 0.3s;
  }
}

.dialog {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  &__image {
    margin-bottom: 18px;
  }
}
</style>
