<template>
  <section>
    <h2>{{ title }}</h2>
    <div
      v-for="video in list"
      :key="video"
    >
      <VideoItem />
    </div>
  </section>
</template>

<script>
import VideoItem from './VideoItem'

export default {
  name: 'VideoList',
  components: {
    VideoItem
  },
  props: {
    title: {
      type: String,
      default: 'Video List'
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style>

</style>
