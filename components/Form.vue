<template>
  <div class="form">
    <client-only>
      <form name="contact" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact" />

        <div class="form__wrapper">
          <v-text-field
            v-model="name"
            maxlength="40"
            label="Name"
            required
            type="text"
          ></v-text-field>
        </div>

        <div class="form__wrapper">
          <v-text-field
            v-model="email"
            label="E-mail"
            required
            type="email"
          ></v-text-field>
        </div>

        <div class="form__wrapper">
          <v-textarea label="Text" v-model="text" required></v-textarea>
        </div>

        <div class="form__wrapper">
          <v-checkbox
            v-model="checkbox"
            label="送信しますか？"
            type="checkbox"
            required
            class="checkbox"
          ></v-checkbox>
        </div>
        <v-btn class="clear-btn" @click="clearForm">削除</v-btn>
        <v-btn width="100px" color="primary" type="submit">送信</v-btn>
      </form>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      name: '',
      email: '',
      text: '',
      checkbox: false
    }
  },
  methods: {
    clearForm() {
      this.name = ''
      this.email = ''
      this.text = ''
      this.checkbox = false
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 12px 0;
  &__wrapper {
    margin-bottom: 16px;
  }
}

.clear-btn {
  margin-right: 16px;
}
</style>
