<template>
  <div>
    <div v-if="streamtype === 'video'"><a :href="liveUrl"><span class="live-sign">EN VIVO</span></a></div>
    <div v-if="streamtype === 'audio'"><a v-on:click="showPlayer"><span class="live-sign">EN VIVO</span></a></div>
  </div>
</template>

<script>
export default {
  name: 'LiveButton',
  props: {
    streamtype: String,
    liveUrl: String
  },
  methods: {
    showPlayer () {
      this.$emit('showplayer')
    }
  }
}
</script>

<style scoped>

span.live-sign {
  padding: 3px 5px;
  display:inline-block;
  background-color: #FF0000;
  border-radius: 3px;
  border-top: 1px solid rgba(255, 150,150,0.6);
  color: #FFFFFF;
  text-shadow: 0 2px 1px #500, 0 0 4px #FFCCCC;
}

</style>
