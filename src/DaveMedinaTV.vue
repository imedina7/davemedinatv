<template>
  <div id="davemedinatv">
    <StaticLogo class="logo-wrap" aria-label="DaveMedinaTV Logo"/>
    <SocialLinks />
    <div v-if="isLive">
      <LiveButton v-if="showPlayer !== true" :streamtype="liveObj.type" :liveUrl="liveObj.liveUrl" v-on:showplayer="showPlayerHandle"/>
      <LivePlayer v-if="showPlayer === true" :streamtype="liveObj.type" :liveUrl="liveObj.liveUrl" />
    </div>
  </div>
</template>

<script>

import SocialLinks from './components/SocialLinks.vue'
import StaticLogo from './components/StaticLogo.vue'
import LivePlayer from './components/LivePlayer'
import LiveButton from './lib/components/LiveButton'

import axios from 'axios'

export default {
  name: 'DaveMedinaTV',

  components: {
    SocialLinks,
    StaticLogo,
    LivePlayer,
    LiveButton
  },
  props: {
    showPlayer: Boolean
  },
  data () {
    return {
      liveObj: Object
    }
  },
  computed: {
    isLive () {
      if (this.liveObj !== undefined) {
        return this.liveObj.liveUrl !== null
      } else {
        return false
      }
    }
  },
  methods: {
    showPlayerHandle () {
      console.log('Showing player...')
      this.showPlayer = true
    },
    getCsrfToken: () => {
      const cookies = document.cookie.split('&')
      let csrfToken = null

      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].split('=')[0] === '_csrf') {
          csrfToken = cookies[i].split('=')[1]
        }
      }
      if (csrfToken) {
        axios.defaults.headers.common['X-XSRF-TOKEN'] = csrfToken
      }
    },
    fetchLiveStatus: function () {
      this.getCsrfToken()

      axios('/api/v1/liveStatus').then((response) => {
        this.liveUrl = response.data.liveUrl
      }).catch(err => {
        console.log('Live status request failed.')
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

a {
  cursor: pointer
}

body {
  background-color: #000000;
  font-size: 15px;
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
<<<<<<< HEAD
span.live-sign {
  padding: 3px 5px;
  display:inline-block;
  background-color: #FF0000;
  border-radius: 3px;
  border-top: 1px solid rgba(255, 150,150,0.6);
  color: #FFFFFF;
  text-shadow: 0 2px 1px #500, 0 0 4px #FFCCCC;
  box-shadow: 0 2px #22000075, 0 0 50px #ffe0cc75, 0 0 10px #ff8e3d52;
}
=======
>>>>>>> 5aea005 (Finish radio player implementation)
@media (min-width: 320px) {
}
@media (min-width: 568px) {
  .logo-wrap {
    width: 80%;
  }
}
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
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
