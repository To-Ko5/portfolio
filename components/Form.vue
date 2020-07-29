<template>
  <div class="form">
    <client-only>
      <ValidationObserver
        ref="observer"
        v-slot="{ invalid, validated }"
        tag="form"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="validateForm"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div class="form__wrapper">
          <ValidationProvider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:10"
          >
            <v-text-field
              v-model="name"
              maxlength="40"
              :error-messages="errors"
              label="Name"
              type="text"
              name="name"
            ></v-text-field>
          </ValidationProvider>
        </div>

        <div class="form__wrapper">
          <ValidationProvider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              type="email"
              name="email"
            ></v-text-field>
          </ValidationProvider>
        </div>

        <div class="form__wrapper">
          <ValidationProvider
            v-slot="{ errors }"
            name="Contact"
            rules="required"
          >
            <v-textarea
              label="Contact"
              :error-messages="errors"
              v-model="text"
              name="text"
            ></v-textarea>
          </ValidationProvider>
        </div>

        <div class="form__wrapper">
          <ValidationProvider v-slot="{ errors }" name="check" rules="required">
            <v-checkbox
              v-model="checkbox"
              :error-messages="errors"
              label="送信しますか？"
              type="checkbox"
              value="1"
              class="checkbox"
            ></v-checkbox>
          </ValidationProvider>
        </div>
        <div v-show="false">
          <label for="message">スパム対策</label>
          <input type="text" name="bot-field" v-model="botField" />
        </div>
        <v-btn outlined class="clear-btn" @click="clearForm">リセット</v-btn>
        <v-btn
          width="100px"
          color="primary"
          type="submit"
          :class="{ 'no-active': invalid || !validated }"
          >送信</v-btn
        >
      </ValidationObserver>
    </client-only>
    <v-snackbar
      v-model="completeForm"
      timeout="3000"
      multi-line
      color="primary"
    >
      送信完了
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="completeForm = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      name: '',
      email: '',
      text: '',
      checkbox: null,
      botField: '',
      completeForm: false
    }
  },
  methods: {
    async validateForm() {
      const observer: any = this.$refs.observer
      const result = await observer.validate()
      if (!result) {
        return
      }
      this.submitForm()
    },
    submitForm() {
      const params: any = new URLSearchParams()
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('text', this.text)
      if (this.botField) {
        params.append('bot-field', this.botField)
      }
      axios
        .post('/', params)
        .then(() => {
          this.completeForm = true
        })
        .catch((error) => {
          error.response
        })
    },
    clearForm() {
      const observer: any = this.$refs.observer
      this.name = ''
      this.email = ''
      this.text = ''
      this.checkbox = null
      observer.reset()
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

.no-active {
  opacity: 0.6;
  transition: 0.3s;
}
</style>
