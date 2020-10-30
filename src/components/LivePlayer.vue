<template>
  <div class="live-player">
    <div v-if="streamtype == 'video'">
      <video-player ref="videoPlayer" :options="playerOptions"></video-player>
    </div>
    <div v-if="streamtype == 'audio'">
      <audio :src="liveUrl" autoplay controls></audio>
    </div>
  </div>
</template>

<script>

import { videoPlayer } from 'vue-video-player'
import 'videojs-youtube'

export default {
  name: 'LivePlayer',
  data () {
    return {
      playerOptions: {
        muted: false,
        language: 'en',
        sources: [{
          src: this.liveUrl
        }]
      }
    }
  },
  props: {
    liveUrl: String,
    streamtype: String
  },
  mounted () {
    console.log('player mounted')
  },
  components: {
    videoPlayer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.live-player .controls {
  position: fixed;
  height: 40px;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
