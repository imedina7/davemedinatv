<template>
  <div class="links" aria-label="Redes Sociales">
    <ul>
      <li><a aria-label="Youtube" href="https://www.youtube.com/DaveMedinaTV"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
      <li><a aria-label="Instagram" href="https://www.instagram.com/davemedina.tv"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
      <li><a aria-label="Twitter" href="https://www.twitter.com/davemedinatv"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
      <li><a aria-label="Facebook" href="https://www.facebook.com/davemedina.tv"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
      <li><a aria-label="Mixcloud" href="https://www.mixcloud.com/davemedinatv"><font-awesome-icon :icon="['fab', 'mixcloud']" /></a></li>
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
  display: inline-block;
  width: 100%;
  display: flex;
}
li {
<<<<<<< HEAD
  flex-grow: 1;
=======
  display: inline-block;
  margin: 0 20px;
>>>>>>> 6de39500704817d0bf2d9363b2619c1e1cbad472
}
a {
  color: #a7a7a7;
  text-decoration: none;
}
a:hover {
  color:#DDDDDD;
}
<<<<<<< HEAD
div.links {
  width: 100%;
}
=======
>>>>>>> 6de39500704817d0bf2d9363b2619c1e1cbad472
div.links ul li > a {
  font-size: 20pt;
}
</style>
