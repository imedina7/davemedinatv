<template>
  <div class="content">
    <Trailer class="trailer"/>
    <div><h1>Aca hay mas cosas</h1></div>
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
}
div.content {
  z-index: -100;
  display:flex;
  flex-grow: 1;
  flex-direction: column;
  height: 2000px
}
</style>
