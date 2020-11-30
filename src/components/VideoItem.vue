<template>
  <div class="video-item">
      <img :src="this.thumbnail" />

  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    video: Object
  },
  computed: {
    thumbnail () {
      return 'standard'
    }
  }
}
</script>

<style scoped>

</style>
