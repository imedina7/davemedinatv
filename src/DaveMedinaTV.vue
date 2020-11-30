<template>
  <div id="davemedinatv">
    <Curtain id="curtain"
      :isLive="this.isLive"
      :linksStyle="this.linksStyle"
      :style="this.curtainStyle"
      :liveUrl="this.liveUrl"/>
    <Content/>
  </div>
</template>

<script>

import Curtain from './components/Curtain.vue'
import Content from './components/Content.vue'

import axios from 'axios'

export default {
  name: 'DaveMedinaTV',

  components: {
    Curtain,
    Content
  },

  data () {
    return {
      isLive: false,
      liveUrl: null,
      curtainStyle: 'height: 100%',
      linksStyle: 'width: 100%'
    }
  },
  methods: {
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
        this.isLive = (response.data.liveUrl !== null)
      }).catch(err => {
        console.log('Live status request failed.')
        console.log(err)
      })
    },
    scrollHandler: function (e) {
      const offsetY = e.path[1].pageYOffset
      const heightPercent = 100 - ((offsetY <= 300) ? (offsetY / 300) * 90 : 90)
      const widthPercent = 100 - ((offsetY <= 300) ? (offsetY / 300) * 40 : 40)
      this.curtainStyle = `height: ${heightPercent}%`
      this.linksStyle = `width: ${widthPercent}%; `
      if (offsetY >= 250) {
        this.curtainStyle = `height: ${heightPercent}%; flex-direction: row`
        this.linksStyle = `width: ${widthPercent}%; justify-content: end`
      }
    },
    main: function () {
      document.addEventListener('scroll', this.scrollHandler)
      this.fetchLiveStatus()
    }
  },
  mounted: function () {
    this.main()
  }
}
</script>

<style>
@import url('/assets/fonts/DoppioOne-Regular.ttf');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400&display=swap');

body {
  background-color: #000000;
  font-size: 15px;
  margin: 0;
  padding: 0;
}

#davemedinatv {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display:flex
}
h1,h2,h3 {
  font-family: 'Doppio One';
}

span.live-sign {
  font-family: 'Doppio One';
  padding: 3px 5px;
  display:inline-block;
  background-color: #FF0000;
  border-radius: 3px;
  border-top: 1px solid rgba(255, 150,150,0.6);
  color: #FFFFFF;
  text-shadow: 0 2px 1px #500, 0 0 4px #FFCCCC;
  box-shadow: 0 2px #22000075, 0 0 50px #ffe0cc75, 0 0 10px #ff8e3d52;
}
@media (min-width: 320px) {
}
@media (min-width: 568px) {

}
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
@media (min-width: 1024px) {

}
</style>
