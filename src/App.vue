<template>
  <h1>Triskele Healing</h1>
  <nav>
    <router-link
      class="nav-item"
      v-for="item in navItems"
      :key="item[0]"
      :to="item[2]"
    >
      <img :src="item[1]" :alt="item[4]" />
      <p>{{ item[0] }}</p>
    </router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import homeImg from "./assets/2019.jpg";
import treatImg from "./assets/2015.jpg";
import courseImg from "./assets/2014.jpg";
import linksImg from "./assets/2013.jpg";
import contactImg from "./assets/2012.jpg";

export default {
  data() {
    return {
      navItems: [
        ["Home", homeImg, "/", "Crown Chakra painting"],
        ["Treatments", treatImg, "treatments", "Third Eye Chakra painting"],
        ["Courses", courseImg, "courses", "Throat Chakra painting"],
        ["Links", linksImg, "links", "Heart Chakra painting"],
        ["Contact", contactImg, "contact", "Solar Plexus Chakra painting"],
      ],
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
img {
  width: 66px;
}
nav {
  height: 90px;
  margin: 0 auto;
  width: 340px;
}
.nav-item {
  display: inline;
  float: left;
  height: 88px;
  list-style-type: none;
  margin: 1px;
}
p {
  font-size: 0.8em;
  font-weight: bold;
  line-height: 5px;
  text-align: center;
  width: 66px;
}
</style>
