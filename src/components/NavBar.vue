<template>
  <div id="NavBar">
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
  </div>
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
