<template>
  <div class="video-item">
    <img :src="thumbnail">
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    video: {
      type: Object,
      default: () => {
        return {}
      }
    }
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
