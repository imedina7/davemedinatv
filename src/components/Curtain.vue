<template>
  <div class="wrap">
    <StaticLogo class="logo-wrap" aria-label="DaveMedinaTV Logo" />
    <SocialLinks :style="this.linksStyle" class="social-links"/>
    <div v-if="isLive">
      <a href="/live"><span class="live-sign">LIVE NOW</span></a>
    </div>
  </div>
</template>

<script>
import SocialLinks from './SocialLinks.vue'
import StaticLogo from './StaticLogo.vue'

export default {
  name: 'Curtain',
  components: {
    SocialLinks,
    StaticLogo
  },
  props: {
    isLive: Boolean,
    liveUrl: String,
    linksStyle: String
  },
  mounted () {
    this.curtain = document.querySelector('.wrap')
    this.links = document.querySelector('.links')
  }
}
</script>

<style>
div.wrap {
  background: rgba(0,0,0,0.6);
  background-image: url('../assets/tile.png');
  position:fixed;
  padding: 5px 0;
  right:0;
  left: 0;
  top: 0;
  height: 100%;
  min-height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  flex-grow: 1;
  backdrop-filter: blur(5px);
  z-index: 50;
}
.logo-wrap {
  height: 90%;
  width: auto;
  min-height: 80%;
  min-width: 30%;
  max-width: 80%
}
</style>
