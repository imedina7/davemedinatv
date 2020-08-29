<template>
  <div id="davemedinatv">
    <img id="dave_logo" src="./assets/dave_logo.svg">
    <SocialLinks />
  </div>
</template>

<script>

import SocialLinks from './components/SocialLinks.vue'

import axios from 'axios'

export default {
  name: 'DaveMedinaTV',

  components: {
    SocialLinks
  },

  props: {
    isLive: null,
    liveUrl: null
  },

  methods: {
    fetchLiveStatus: () => {
      axios('/api/liveStatus').then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>

body {
  background-color: #000000;
}
#davemedinatv {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
#dave_logo {
  width: 70%
}

</style>
