<template>
  <div id="app">
    <img id="dave_logo" src="./assets/dave_logo.svg">
    <SocialLinks />
  </div>
</template>

<script>
import SocialLinks from './components/SocialLinks.vue'

export default {
  name: 'App',
  components: {
    SocialLinks
  }
}
</script>

<style>
body {
  background-color: #000000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#dave_logo {
  width: 70%
}
</style>
