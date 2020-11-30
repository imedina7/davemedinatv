<template>
  <div class="links" aria-label="Redes Sociales">
    <ul>
      <li><a aria-label="Youtube" href="https://www.youtube.com/DaveMedinaTV"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
      <li><a aria-label="Instagram" href="https://www.instagram.com/davemedina.tv"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
      <li><a aria-label="Twitter" href="https://www.twitter.com/davemedinatv"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
      <li><a aria-label="Facebook" href="https://www.facebook.com/davemedina.tv"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
}
li {
  flex-grow: 1;
  text-align: center;
}
a {
  color: #a7a7a7;
  text-decoration: none;
}
a:hover {
  color:#DDDDDD;
}
div.links {
  width: 100%;
  transition: all 1s;
  flex-shrink: 3;
}
div.links ul li > a {
  font-size: 2em;
}
</style>
