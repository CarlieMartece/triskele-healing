<template>
  <header>
    <h1>Triskele Healing</h1>
    <nav>
      <router-link
        class="nav-item"
        v-for="page in navData"
        :key="page.id"
        :to="page.slug"
      >
        <img :src="`/images/${page.image}.jpg`" :alt="page.alt" />
        <p>{{ page.name }}</p>
      </router-link>
    </nav>
  </header>
</template>

<script>
import navData from "../data/navData.js";

export default {
  data() {
    return {
      navData,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  color: black;
  text-decoration: none;
}
header {
  background-color: white;
  display: block;
  grid-area: 1 / 1 / 2 / 2;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
}
img {
  width: 106px;
}
nav {
  height: 130px;
  margin: 0 auto;
  width: 540px;
}
.nav-item {
  display: inline;
  float: left;
  height: 128px;
  list-style-type: none;
  margin: 1px;
}
p {
  font-size: 1.2em;
  font-weight: bold;
  line-height: 15px;
  text-align: center;
  width: 106px;
}
</style>
