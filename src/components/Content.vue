<template>
  <div class="content-wrap">
    <div class="content">
      <h1>Videos populares</h1>
    </div>
    <Trailer class="trailer"/>
  </div>
</template>

<script>
import Trailer from './Trailer'
export default {
  name: 'Content',
  components: {
    Trailer
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
  margin-top: 100vh;
  display:flex;
  flex-grow: 1;
  background-color: rgba(0,0,0,0.8);
  flex-direction: column;
  height: 2000px;
  backdrop-filter: blur(5px);
}
</style>
