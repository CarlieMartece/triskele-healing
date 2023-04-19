<template>
  <header>
    <h1>Triskele Healing</h1>
    <Slide>
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
    </Slide>
  </header>
</template>

<script>
import { Slide } from "vue3-burger-menu";
import navData from "../data/navData.js";

export default {
  components: {
    Slide,
  },
  data() {
    return {
      navData,
    };
  },
};
</script>

<style scoped>
* {
  display: block;
}
a {
  color: aliceblue;
}
header {
  background-color: white;
  grid-area: 1 / 1 / 2 / 2;
}
img {
  border: 1px solid aliceblue;
  border-radius: 2px;
  display: inline;
  height: 79px;
}
.nav-item {
  align-items: center;
  display: flex;
  height: 101px;
  justify-content: left;
  width: 220px;
}
p {
  display: inline;
  margin-left: 20px;
}
</style>
