<template>
  <div class="trailer-preview">
    <video
      id="video"
      autoplay
      muted
      loop
    >
      <source
        src="https://dl5.webmfiles.org/big-buck-bunny_trailer.webm"
        type="video/webm"
      >
    </video>
  </div>
</template>

<script>
export default {
  name: 'Trailer',
  data () {
    return {
      video: null,
      videoContainer: null,
      windowWidth: null,
      windowHeight: null
    }
  },
  computed: {
    videoAlignX: function () {
      return this.windowWidth / 2 - this.video.offsetWidth / 2
    }
  },
  mounted () {
    this.video = document.getElementById('video')
    this.videoContainer = document.querySelector('.trailer-preview')
    this.relocateBgVideo()

    this.relocateBgVideo()
    window.addEventListener('resize', e => {
      this.relocateBgVideo()
    })
  },
  methods: {
    relocateBgVideo: function () {
      this.windowWidth = window.innerWidth
      this.video.style.left = this.videoAlignX + 'px'
    }
  }
}
</script>

<style scoped>

.trailer-preview {
  display:flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom:0;
  right: 0;
  left:0;
  overflow: hidden
}
video {
  position:absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}
</style>
