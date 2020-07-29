<template>
  <div class="links">
    <ul>
      <li><a href="https://www.youtube.com/DaveMedinaTV"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
      <li><a href="https://www.instagram.com/davemedina.tv"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
      <li><a href="https://www.twitter.com/davemedinatv"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
      <li><a href="https://www.facebook.com/davemedina.tv"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
      <li><a href="https://www.mixcloud.com/davemedinatv"><font-awesome-icon :icon="['fab', 'mixcloud']" /></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 20px;
}
a {
  color: #a7a7a7;
  text-decoration: none;
}
a:hover {
  color:#DDDDDD;
}
div.links ul li > a {
  font-size: 20pt;
}
</style>
