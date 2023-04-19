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
header {
  height: 79px;
}
</style>
