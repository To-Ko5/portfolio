<template>
  <div class="form">
    <form name="contact" method="POST" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <v-text-field
        v-model="name"
        :counter="10"
        :error-messages="errors"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :error-messages="errors"
        label="E-mail"
        required
      ></v-text-field>

      <v-textarea label="Text"></v-textarea>
      <v-checkbox
        v-model="checkbox"
        :error-messages="errors"
        value="1"
        label="Option"
        type="checkbox"
        required
      ></v-checkbox>

      <v-btn type="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.form {
  max-width: 960px;
  margin: 0 auto;
}
</style>
