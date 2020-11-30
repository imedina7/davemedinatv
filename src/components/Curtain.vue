<template>
  <div class="wrap">
    <StaticLogo
      class="logo-wrap"
      aria-label="DaveMedinaTV Logo"
    />
    <div
      v-if="isLive"
      class="live-button"
    >
      <a href="/live"><span class="live-sign">LIVE</span></a>
    </div>
    <SocialLinks
      :style="linksStyle"
      class="social-links"
    />
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
    liveUrl: {
      type: String,
      default: ''
    },
    linksStyle: {
      type: String,
      default: ''
    }
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
  padding: 5px;
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
  backdrop-filter: blur(10px);
  z-index: 500;
  box-shadow: 0 3px 10px black;
  transition: height 500ms ease-out;
}
.logo-wrap {
  height: 120%;
  width: auto;
  min-height: 80%;
  min-width: 30%;
  max-width: 80%
}
div.live-button {
  margin: 0.3px .8em;
}
span.live-sign {
  font-family: 'Doppio One';
  padding: 0.1em 0.5em;
  background: linear-gradient(#ff4444 30%, #FF0000 40%, #ff2600 80%, #ee1500 95%,#772222 100%);
  border-radius: 3px;
  border-top: 1px solid rgba(255, 150,150,0.6);
  color: #FFFFFF;
  text-shadow: inset 0 0 3px #FF0000, 0 2px 1px #500, 0 0 4px #FFCCCC;
  box-shadow: 0 2px #22000075, 0 0 50px #ffe0cc75, 0 0 10px #ff8e3d52,inset 0 0 10px #CC0000;;
}
</style>
