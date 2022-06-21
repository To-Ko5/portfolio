<template>
  <div class="profile">
    <v-card class="mx-auto" max-width="600px">
      <nuxt-img
        :src="profile.fields.profileImg.fields.file.url"
        lazy-src="https://picsum.photos/id/11/10/6?grayscale&blur=1"
        width="668"
        height="400"
        preload
        quality="80"
        :alt="`${profile.fields.name}` + '-' + 'image'"
      />

      <v-card-title class="name">
        <h1 class="name__title">{{ profile.fields.name }}</h1>
      </v-card-title>

      <v-card-subtitle>
        {{ profile.fields.job }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="grey" icon @click="toLink(profile.fields.github)"
          ><v-icon>{{ mdiGithub }}</v-icon></v-btn
        >

        <v-btn color="green" icon @click="toLink(profile.fields.qiita)">
          <v-icon>{{ mdiPost }}</v-icon>
        </v-btn>

        <v-btn color="blue" icon @click="toLink(profile.fields.twitter)">
          <v-icon>{{ mdiTwitter }}</v-icon>
        </v-btn>

        <v-btn color="purple" icon @click="toLink(profile.fields.instagram)">
          <v-icon>{{ mdiInstagram }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-divider></v-divider>

      <v-card-text class="text">
        <div class="skill">
          <v-chip label outlined>Skills</v-chip>
          <div class="text__wrapper">
            <p>{{ profile.fields.skills }}</p>
          </div>
        </div>
        <div class="description">
          <v-chip label outlined>Profile</v-chip>
          <div class="text__wrapper">
            <p>{{ profile.fields.description }}</p>
          </div>
        </div>
        <div class="certifications">
          <v-chip label outlined>Certifications</v-chip>
          <div class="text__wrapper">
            <ul class="certifications__lists">
              <li
                v-for="(certification, index) in profile.fields.certifications"
                :key="index"
              >
                {{ certification }}
              </li>
            </ul>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mdiGithub, mdiTwitter, mdiPost, mdiInstagram } from '@mdi/js'

export default Vue.extend({
  props: {
    profile: {
      type: Object as PropType<{}>,
      required: true
    }
  },
  data() {
    return {
      show: false,
      mdiGithub,
      mdiTwitter,
      mdiPost,
      mdiInstagram
    }
  },
  methods: {
    toLink(url: string) {
      window.open(url, '_blank')
    }
  }
})
</script>

<style lang="scss" scoped>
.profile {
  padding: 0 8px;
  & img {
    @media (max-width: 768px) {
      height: auto;
    }
  }
}

.name {
  margin-bottom: 8px;
  &__title {
    font-size: 28px;
  }
}

.text {
  &__wrapper {
    margin: 8px 0 0 12px;
  }
}

.certifications {
  &__lists {
    margin: 0;
    list-style: square;
  }
}
</style>
