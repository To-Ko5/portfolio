<template>
  <div class="menu">
    <h1 class="title">C-Portfolio</h1>
    <ul class="nav">
      <li class="nav__list nav__list--home">
        <nuxt-link to="" @click.native="toLink('home')"> HOME</nuxt-link>
      </li>
      <li class="nav__list nav__list--about" @click="toLink('about')">
        <nuxt-link to="" @click.native="toLink('about')"> ABOUT</nuxt-link>
      </li>
      <li class="nav__list nav__list--gallery" @click="toLink('gallery')">
        <nuxt-link to="" @click.native="toLink('gallery')"> GALLERY</nuxt-link>
      </li>
      <li class="nav__list nav__list--contact" @click="toLink('contact')">
        <nuxt-link to="" @click.native="toLink('contact')"> CONTACT</nuxt-link>
      </li>
    </ul>
    <transition name="fade">
      <div v-if="transitionBlock" class="transition-block">
        <p class="transition-block__words">{{ words | upperCase }}</p>
      </div>
    </transition>
    <Glitch />
    <Noise />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Glitch from '@/components/top/Glitch.vue'
import Noise from '@/components/top/Noise.vue'
export default Vue.extend({
  layout: 'no-header',
  components: {
    Glitch,
    Noise
  },
  filters: {
    upperCase(words: string) {
      return words.toUpperCase()
    }
  },
  data() {
    return {
      words: '',
      transitionBlock: false
    }
  },
  methods: {
    async toLink(link: string) {
      this.words = link
      let linkPath = ''
      if (link === 'home') {
        linkPath = '/'
      } else {
        linkPath = '/' + link
      }
      this.transitionBlock = true
      setTimeout(() => {
        this.$router.push(linkPath)
      }, 500)
    }
  },
  head() {
    return {
      titleTemplate: ''
    }
  }
})
</script>
<style lang="scss" scoped>
ul,
li {
  margin: 0;
  padding: 0;
  line-height: 1;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit !important;
}
@supports (-webkit-touch-callout: none) {
  .top-page {
    /* The hack for Safari */
    height: -webkit-fill-available;
  }
}
.top-page {
  min-height: 100vh;
  width: 100%;
  position: relative;
  color: #fff;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: fade-in 1s ease 0.5s forwards;
  font-size: clamp(24px, calc(16px + 3vw), 80px) !important;
  z-index: 900;
}
.nav {
  width: 92%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 4%;
  list-style: none;
  opacity: 0;
  animation: fade-in 3s ease 0.5s forwards;
  z-index: 900;
  &__list {
    position: absolute;
    font-size: 32px;
    cursor: pointer;
    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
    &--home {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &--about {
      top: 50%;
      left: 0;
      transform: translate(-30%, -50%) rotate(-90deg);
    }
    &--gallery {
      top: 50%;
      right: 0;
      transform: translate(30%, -50%) rotate(90deg);
    }
    &--contact {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.transition-block {
  background: #212121;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1000;
  &__words {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(24px, calc(16px + 3vw), 80px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.2);
}
</style>
