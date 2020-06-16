<template>
  <div class="links">
    <ul>
      <li><a href="https://www.youtube.com/DaveMedinaTV">YouTube</a></li>
      <li><a href="https://www.instagram.com/davemedina.tv">Instagram</a></li>
      <li><a href="https://www.twitter.com/davemedinatv">Twitter</a></li>
      <li><a href="https://www.facebook.com/davemedina.tv">Facebook</a></li>
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
  margin: 0 10px;
}
a {
  color: #a7a7a7;
  text-decoration: none;
}
a:hover {
  color:#DDDDDD;
}
</style>
