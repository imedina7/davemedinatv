<template>
  <div class="live-player">
    <video-player ref="videoPlayer"></video-player>
  </div>
</template>

<script>

import { videoPlayer } from vue-video-player

export default {
  name: 'LivePlayer',
  props: {
    liveUrl: String
  },
  components: {
    videoPlayer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
