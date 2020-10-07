<template>
  <div id="davemedinatv" v-on:load="main">
    <StaticLogo class="logo-wrap" aria-label="DaveMedinaTV Logo"/>
    <SocialLinks />
  </div>
</template>

<script>

import SocialLinks from './components/SocialLinks.vue'
import StaticLogo from './components/StaticLogo.vue'

import axios from 'axios'

export default {
  name: 'DaveMedinaTV',

  components: {
    SocialLinks,
    StaticLogo
  },

  props: {
    isLive: null,
    liveUrl: null
  },

  methods: {
    fetchLiveStatus: () => {
      axios('/api/liveStatus').then((response) => {
        console.log(response)
      }).catch(err => {
        console.log('Live status request failed.\nError object:')
        console.log(err)
      })
    },
    main: function () {
      this.fetchLiveStatus()
    }
  },
  mounted: function () {
    this.main()
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
  margin-top: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.logo-wrap {
  width: 100%;
}
@media (min-width: 320px) {
}
@media (min-width: 568px) {
  .logo-wrap {
    width: 80%;
  }
}
@media (min-width: 768px) {
  .logo-wrap {
    width: 75%;
  }
}
@media (min-width: 1024px) {
  .logo-wrap {
    width: 70%;
  }
}
</style>
