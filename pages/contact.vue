<template>
  <div class="contact">
    <h1 class="contact__title">Contact</h1>
    <Form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '~/components/Form.vue'

export default Vue.extend({
  components: {
    Form
  },
  head() {
    return {
      title: 'Contact'
    }
  }
})
</script>

<style lang="scss" scoped>
.contact {
  &__title {
    text-align: center;
    margin-bottom: 24px;
    font-weight: 500;
  }
}
</style>
