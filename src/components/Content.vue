<template>
  <div class="content-wrap">
    <div class="content">
      <VideoList title="Videos Populares" />
      <VideoList title="Últimos Videos" />
    </div>
    <Trailer class="trailer" />
  </div>
</template>

<script>
import Trailer from './Trailer'
import VideoList from './VideoList'

export default {
  name: 'Content',
  components: {
    Trailer,
    VideoList
  },
  props: {
    videoContent: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      video: null,
      videoContainer: null,
      windowWidth: null,
      windowHeight: null
    }
  },
  mounted () {
    console.log('Loaded content component')
  }
}
</script>

<style scoped>
.trailer {
  position: fixed;
  z-index: -100;
}
div.content-wrap {
  width:100%
}
div.content {
  z-index: 100;
  width: 100%;
  position: relative;
  top: 110vh;
  display:flex;
  flex-grow: 1;
  background-color: rgba(0,0,0,0.8);
  background-image: url('../assets/noisy_bg.png');
  flex-direction: column;
  height: 2000px;
  backdrop-filter: blur(5px);
}
</style>
